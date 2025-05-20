import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../helpers/response';
import { httpStatusCodes } from '../helpers/statusCodes';
import prisma from '../config/prisma';
import { openAi } from '../config/openAi';

const configContentModerationController = {
  configContentModeration: async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const { name } = req.body;
      const data = req.body;
      const exist = await prisma.moderationSetting.findFirst({
        where: {
          name: name,
        },
      });
      if (exist) {
        const result = await prisma.moderationSetting.update({
          where: {
            id: exist.id,
          },
          data: {
            ...data,
          },
        });
        successResponse(res, 'Cập nhật thông tin Config thành công', result);
        return;
      }
      const result = await prisma.moderationSetting.create({
        data: data,
      });

      successResponse(res, 'Thông tin Config thành công', result);
    } catch (error: any) {
      errorResponse(
        res,
        error?.message,
        error,
        httpStatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  },
  config: async (req: Request, res: Response): Promise<void> => {
    try {
      const { facebook_fanpage_id } = req.query;
      const exist = await prisma.moderationSetting.findFirst({
        where: {
          facebook_fanpage_id: (facebook_fanpage_id as string) || '',
        },
      });
      if (exist) {
        successResponse(res, 'Thông tin Config thành công', exist);
        return;
      }

      successResponse(res, 'Thông tin Config', {});
    } catch (error: any) {
      errorResponse(
        res,
        error?.message,
        error,
        httpStatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  },
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
      // functions: [
      //   {
      //     name: 'file_search',
      //     description:
      //       'Tìm kiếm trong cơ sở dữ liệu tiêu chuẩn cộng đồng hoặc ví dụ vi phạm',
      //     parameters: {
      //       type: 'object',
      //       properties: {
      //         query: {
      //           type: 'string',
      //           description: 'Nội dung cần tìm kiếm trong cơ sở dữ liệu',
      //         },
      //       },
      //       required: ['query'],
      //     },
      //   },
      // ],
      temperature: 0.4,
      max_tokens: 2500,
      top_p: 1,
      store: true,
    });
    console.log('analyzeContent response', response?.choices[0]);
    return response?.choices[0]?.message?.content;
  } catch (error: any) {
    throw new Error(`Phân tích thất bại: ${error.message}`);
  }
};
export const hypotheticalViolationReason = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { content } = req.body;
    if (!content) return;
    const response = await openAi.chat.completions.create({
      model: 'gpt-4-turbo',
      messages: [
        {
          role: 'system',
          content: `Bạn là AI kiểm duyệt nội dung cho mạng xã hội. 
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
  "hypothetical_violation_reason": "string - lý do chi tiết bằng tiếng Việt"
}
Không thêm bất kỳ text, markdown hay giải thích nào khác.`,
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
    const analyzeResult = await analyzeContent(
      content,
      parsed?.hypothetical_violation_reason,
    );
    const parsedAnalyze = JSON.parse(analyzeResult || '{}');
    successResponse(res, 'Success', {
      original_content: content,
      ...parsedAnalyze,
    });
    return parsed;
  } catch (error: any) {
    console.log(error);
    errorResponse(
      res,
      error?.message,
      error,
      httpStatusCodes.INTERNAL_SERVER_ERROR,
    );
  }
};
export default configContentModerationController;
