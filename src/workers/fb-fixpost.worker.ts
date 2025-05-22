import Bull from 'bull';
import facebookPostModel from '../models/FacebookPost.model';
import { openAi } from '../config/openAi';
import prisma from '../config/prisma';
import axios from 'axios';
import { sendEmail } from '../controllers/mails.controller';
import { MailsModel } from '../models/Mailer.model';
import { format } from 'date-fns';

export const fbFixPost = new Bull('fb-fixpost', {
  redis: { port: 6379, host: 'localhost' },
  limiter: {
    max: 50, // tối đa 10 job
    duration: 1000, // mỗi 1000ms
  },
});
const samplePrompt = `Bạn là AI kiểm duyệt nội dung cho mạng xã hội. 
        Giả sử nội dung đầu vào vi phạm nguyên tắc cộng đồng của Facebook,
        hãy giải thích lý do tại sao dựa trên các tiêu chí sau:
Cấu Kết Và Cổ Xúy Tội Ác
Cá Nhân Và Tổ Chức Nguy Hiểm
Bóc Lột Con Người
Bắt Nạt và Quấy Rối
Bóc Lột Tình Dục Người Lớn
Bạo Lực và Kích Động
Ảnh Khỏa Thân, Hành Vi Lạm Dụng Và Bóc Lột Tình Dục Trẻ Em
Hành Vi Tự Tử, Gây Thương Tích và Chứng Rối Loạn ăn Uống
Hành Vi Gây Thù Ghét
Hành Vi Gian Lận, Lừa Đảo và Lừa Gạt
Hành Vi Gạ Gẫm Tình Dục Người Lớn Và Ngôn Ngữ Khiêu Dâm
Hành Động Tình Dục và Ảnh Khỏa Thân Người Lớn
Nội Dung Bạo Lực Và Phản Cảm
Sử Dụng Giấy Phép và Tài Sản Trí Tuệ Của Meta
Vi Phạm Quyền Riêng Tư
Xâm Phạm Quyền Sở Hữu Trí Tuệ Của Bên Thứ 3
Hàng Hóa, Dịch Vụ Bị Hạn Chế
Nội Dung, Sản Phẩm hoặc Dịch Vụ Vi Phạm Luật Pháp Nước Sở Tại: Việt Nam
Tính Toàn Vẹn Của Tài Khoản
Cam Đoan Về Danh Tính Thực
An Ninh Mạng
Hành Vi Gian Dối
Tưởng Nhớ
Thông Tin Sai Lệch
Spam
Biện Pháp Bảo Vệ Bổ Sung Cho Trẻ Vị Thành Niên
Yêu Cầu Người Dùng
Chỉ trả về những dấu hiệu khá rõ ràng, không đưa ra lý do không rõ ràng thiếu cơ sở.
Chỉ trả về JSON object theo định dạng sau nếu có vi phạm:
{
  "hypothetical_violation_reason": "string - lý do chi tiết bằng tiếng Việt",
  "severity": "veryhigh" | "high" | "medium" | "low" // mức độ nghiêm trọng nếu có vi phạm
}
Nếu không vi phạm gì hypothetical_violation_reason là null 
Không thêm bất kỳ text, markdown hay giải thích nào khác.`;
const hypotheticalViolationReason = async (
  content: string | undefined,
  prompt: string,
) => {
  try {
    if (!content) return;
    const response = await openAi.chat.completions.create({
      model: 'gpt-4-turbo',
      messages: [
        {
          role: 'system',
          content:
            prompt &&
            prompt?.includes('hypothetical_violation_reason') &&
            prompt?.includes('severity')
              ? prompt
              : samplePrompt,
        },
        {
          role: 'user',
          content: `Giả sử nội dung sau vi phạm:
Nội dung: ${content}`,
        },
      ],
      temperature: 0.4,
      max_tokens: 500,
      top_p: 1,
    });
    const result = response?.choices[0]?.message?.content;
    console.log('result', result);
    const parsed = JSON.parse(result || '{}');
    return parsed;
  } catch (error: any) {
    console.log(error);
  }
};
const analyzeContent = async (content: any, hypotheticalReason: any) => {
  try {
    const response = await openAi.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `Bạn là AI kiểm duyệt nội dung cho mạng xã hội. 
        Hãy phân tích nội dung đầu vào và nếu cần, sử dụng công cụ "file_search"
        để đối chiếu với cơ sở dữ liệu tiêu chuẩn cộng đồng hoặc ví dụ vi phạm.
Nếu phát hiện vi phạm, hãy cung cấp một phiên bản đã được chỉnh sửa để nội dung phù hợp với tiêu chuẩn cộng đồng.
Nếu không phát hiện vi phạm, hãy trả về một thông báo xác nhận rằng nội dung không vi phạm.
Chỉ trả về kết quả dưới dạng **JSON object** với đúng định dạng sau:
{
  "violates": boolean,
  "confidence": number, // 0-100, chọn giá trị thể hiện rõ sự phân cực, tránh giá trị trung lập như 50 trừ khi có lý do xác đáng
  "violation_type": string, // mô tả loại vi phạm cụ thể hoặc 'không vi phạm'
  "reason": string, // giải thích bằng tiếng Việt vì sao nội dung vi phạm hoặc không vi phạm
  "severity": "veryhigh" | "high" | "medium" | "low" // mức độ nghiêm trọng nếu có vi phạm
  "suggested_content": string // nếu violates = true, nội dung đã được chỉnh sửa để không còn vi phạm. Nếu không vi phạm thì trả về nội dung gốc

}`,
        },
        {
          role: 'user',
          content: `Phân tích nội dung sau:\nNội dung: ${content}\nMedia: ${hypotheticalReason ? `\nXét kỹ ở khía cạnh: ${hypotheticalReason}` : 'Không có media'}`,
        },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.4,
      max_tokens: 2500,
      top_p: 1,
      store: true,
    });
    console.log('analyzeContent response', response?.choices[0]);
    const parsedAnalyze = JSON.parse(
      response?.choices[0]?.message?.content || '{}',
    );
    return parsedAnalyze;
  } catch (error: any) {
    throw new Error(`Phân tích thất bại: ${error.message}`);
  }
};
const hanleSendMail = async (data: any) => {
  try {
    const result = await MailsModel.create(data);
    await sendEmail(data);
  } catch (error: any) {
    throw new Error(`Lỗi gửi mail: ${error.message}`);
  }
};
const updateDb = async (data: any) => {
  try {
    const {
      facebook_post_id,
      message,
      facebook_fanpage_id,
      created_time,
      link,
      photos,
      page_name,
      page_category,
    } = data;
    const checkModerate = await prisma.moderationSetting.findFirst({
      where: {
        facebook_fanpage_id,
      },
    });
    const connection = await prisma.facebookConnections.findFirst({
      where: {
        facebook_fanpage_id,
      },
    });
    const payload = {
      content: message || '',
      facebook_fanpage_id: facebook_fanpage_id,
      posted_at: new Date(created_time * 1000),
      likes: 0,
      comments: 0,
      shares: 0,
      status: 'published',
      post_avatar_url: link ? link : photos ? JSON.stringify(photos) : '',
      schedule: false,
      page_name: page_name || ' ',
      page_category: page_category || '',
    };
    if (checkModerate?.hide_post_violations) {
      const hypoReson = await hypotheticalViolationReason(
        message,
        checkModerate.prompt,
      );
      if (
        hypoReson &&
        hypoReson.hypothetical_violation_reason &&
        hypoReson.severity
      ) {
        console.log('hypoReson delete', hypoReson);
        await axios.delete(
          `https://graph.facebook.com/v22.0/${facebook_post_id}?access_token=${connection?.access_token?.[0] || ''}`,
        );
        await facebookPostModel.updateOne(
          {
            facebook_post_id: facebook_post_id,
          },
          {
            $set: { ...payload, is_delete: true },
          },
          { upsert: true },
        );
        console.log('xóa mềm', facebook_post_id);
        return;
      }
    }
    if (
      checkModerate &&
      checkModerate.auto_moderation &&
      checkModerate.edit_minor_content
    ) {
      const hypoReson = await hypotheticalViolationReason(
        message,
        checkModerate.prompt,
      );
      const anlysisReson = await analyzeContent(
        message,
        hypoReson?.hypothetical_violation_reason,
      );
      const updateFB = await axios.post(
        `https://graph.facebook.com/v22.0/${facebook_post_id}`,
        null,
        {
          params: {
            message: anlysisReson?.suggested_content || '',
            access_token: connection?.access_token?.[0] || '',
          },
        },
      );
      await facebookPostModel.updateOne(
        {
          facebook_post_id: facebook_post_id,
        },
        {
          $set: payload,
        },
        { upsert: true },
      );
    } else if (checkModerate && checkModerate.auto_moderation) {
      const hypoReson = await hypotheticalViolationReason(
        message,
        checkModerate.prompt,
      );
      console.log('hypoReson', hypoReson);
      await facebookPostModel.updateOne(
        {
          facebook_post_id: facebook_post_id,
        },
        {
          $set: {
            ...payload,
            hypothetical_violation_reason:
              hypoReson?.hypothetical_violation_reason || '',
            severity: hypoReson?.severity || '',
          },
        },
        { upsert: true },
      );
    } else {
      await facebookPostModel.updateOne(
        {
          facebook_post_id: facebook_post_id,
        },
        {
          $set: payload,
        },
        { upsert: true },
      );
    }
    if (checkModerate && checkModerate.notify_admin) {
      const hypoReson = await hypotheticalViolationReason(
        message,
        checkModerate.prompt,
      );
      const date = new Date(created_time * 1000);
      if (
        hypoReson &&
        hypoReson.hypothetical_violation_reason &&
        hypoReson.severity
      ) {
        await hanleSendMail({
          name: 'AI Moderation Bot',
          email: checkModerate.admin_email,
          subject: 'Báo cáo vi phạm nội dung từ hệ thống kiểm duyệt',
          message: `
Kính gửi quản trị viên,

Hệ thống kiểm duyệt nội dung tự động (AI Moderation) đã phát hiện một trường hợp vi phạm quy định cộng đồng.

Thông tin chi tiết:
- Fanpage: ${page_name}
- ID bài viết: ${facebook_post_id}
- Nội dung bị gắn cờ: ${message}
- Thời gian phát hiện: ${format(date, 'dd/MM/yyyy HH:mm:ss')}

Vui lòng truy cập hệ thống quản trị để xem xét và xử lý vi phạm.

Trân trọng,  
AI Moderation Bot
  `,
        });
      }
    }
    return;
  } catch (error) {
    console.error('Kiểm duyệt error:', error);
  }
};
fbFixPost.process(15, async (job) => {
  const { data } = job;
  try {
    console.log('data', data);
    const res = await updateDb(data);
    console.log(`✅ Kiểm duyệt bài viết thành công: ${data?.facebook_post_id}`);
    return res;
  } catch (err) {
    console.error(
      `❌ Lỗi khi kiểm duyệt bài viết ${data?.facebook_post_id}:`,
      err,
    );
    throw err;
  }
});
