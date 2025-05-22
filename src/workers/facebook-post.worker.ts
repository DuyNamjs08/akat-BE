import axios from 'axios';
import Bull from 'bull';
import facebookPostModel from '../models/FacebookPost.model';
import { format, parseISO } from 'date-fns';
import path from 'path';
import fs from 'fs';
import { openAi } from '../config/openAi';
import Document from '../models/document.model';
import { NotificationModel } from '../models/Notification.model';
import { getIO } from '..';
export const ChangeText = (str: any) =>
  str
    .normalize('NFD') // Tách chữ và dấu
    .replace(/[\u0300-\u036f]/g, '') // Loại dấu
    .replace(/[^a-zA-Z0-9]/g, '');
export const FBPostQueue = new Bull('fb-post', {
  redis: { port: 6379, host: 'localhost' },
  limiter: {
    max: 10, // tối đa 10 job
    duration: 1000, // mỗi 1000ms
  },
});
function normalizePostedAt(dateStr: string): Date {
  // Thêm dấu ":" vào múi giờ nếu thiếu (ví dụ: +0000 → +00:00)
  const fixed = dateStr.replace(/([+-]\d{2})(\d{2})$/, '$1:$2');
  return parseISO(fixed);
}
const workerPostFBMongo = async (dataRaw: any) => {
  const until = Math.floor(Date.now() / 1000);
  const since = until - 28 * 24 * 60 * 60;
  const { token, page_id, page_name, page_category } = dataRaw;
  let totalCount = 0;
  let url = `https://graph.facebook.com/v22.0/${page_id}/posts?fields=id,message,created_time,shares,likes.summary(true).limit(0),comments.summary(true).limit(0),full_picture,status_type&since=${since}&until=${until}&limit=10&access_token=${token}`;
  try {
    while (url) {
      const response = await axios.get(url);
      const data = response.data;
      if (data.error) {
        const errorCode = data.error.code;
        if (errorCode === 190) {
          console.error('Token expired or invalid:', data.error.message);
          throw new Error('Facebook access token is expired or invalid.');
        } else {
          throw new Error(data.error.message);
        }
      }
      if (Array.isArray(data.data)) {
        const result = data.data.map((item: any) => ({
          facebook_post_id: item.id,
          content: item?.message || ' ',
          facebook_fanpage_id: page_id,
          posted_at: normalizePostedAt(item?.created_time),
          likes: item?.likes?.summary?.total_count || 0,
          comments: item?.comments?.summary?.total_count || 0,
          shares: item?.shares?.count || 0,
          status: item?.status_type || '',
          post_avatar_url: item?.full_picture || '',
          schedule: false,
          page_name: page_name || ' ',
          page_category: page_category || ' ',
        }));
        try {
          const operations = result.map((post: any) => ({
            updateOne: {
              filter: { facebook_post_id: post.facebook_post_id },
              update: { $set: post }, // Cập nhật dữ liệu nếu đã có
              upsert: true, // Tự động insert nếu chưa có
            },
          }));
          await facebookPostModel.bulkWrite(operations);
        } catch (err: any) {
          console.error('Failed to post to server:', err.message);
        }
        totalCount += data.data.length;
      }
      url = data.paging?.next || '';
    }
    return totalCount;
  } catch (error: any) {
    console.error('Error during Facebook post fetch:', error.message);
    const repeatableJobs = await FBPostQueue.getRepeatableJobs();
    for (const job of repeatableJobs) {
      await FBPostQueue.removeRepeatableByKey(job.key);
      console.log(`✅ Removed repeatable job: ${job.name}`);
    }
  }
};
async function getEmbeddings(text: string[]) {
  const res = await openAi.embeddings.create({
    input: text,
    model: 'text-embedding-3-small',
    encoding_format: 'float',
  });
  return res.data.map((item) => item.embedding);
}
function chunkArray<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

FBPostQueue.process(5, async (job) => {
  try {
    const io = getIO();
    const { synchronize, page_id, page_name, user_id } = job.data;
    const res = await workerPostFBMongo(job.data);
    if (synchronize) {
      const list = await facebookPostModel.find({
        facebook_fanpage_id: page_id,
      });
      const texts = list.map((post) => post.content || '');
      const batches = chunkArray(texts, 50);
      for (let b = 0; b < batches.length; b++) {
        const batch = batches[b];
        const embeddings = await getEmbeddings(batch);
        // Gắn embedding vào từng post tương ứng:
        for (let i = 0; i < batch.length; i++) {
          await Document.create({
            embedding: embeddings[i],
            content: batch[i],
            facebook_fanpage_id: page_id,
          });
        }
      }
      try {
        const notificationData = {
          userId: user_id,
          title: `Đồng bộ bài viết Facebook từ ${page_name} thành công`,
          message: `Đã đồng bộ ${res} bài viết từ Facebook`,
          type: 'system',
          data: {
            page_id: page_id,
            page_name: page_name,
            page_category: job.data.page_category,
            synchronize: job.data.synchronize,
          },
        };
        console.log('Notification data:', notificationData);
        await NotificationModel.create(notificationData);
        io.to(user_id).emit('fb-sync', notificationData);
      } catch (error) {
        console.error('Lỗi khi đẩy thông báo', error);
        throw error;
      }
    }
    console.log('Post created successfully:', res);
  } catch (err) {
    console.error('Job failed:', err);
    throw err;
  }
});
async function uploadToVectorStore(filePath: string, vectorStoreName: string) {
  try {
    // 1. Upload file lên OpenAI
    const fileUpload = await openAi.files.create({
      file: fs.createReadStream(filePath),
      purpose: 'assistants',
    });
    console.log('📄 File uploaded:', fileUpload.id);
    // 2. Tạo vector store
    const vectorStore = await openAi.vectorStores.create({
      name: vectorStoreName,
      file_ids: [fileUpload.id],
    });
    console.log('✅ Vector store created:', vectorStore.id);
    return vectorStore;
  } catch (error) {
    console.error('❌ Lỗi khi upload lên OpenAI Vector Store:', error);
    throw error;
  }
}
