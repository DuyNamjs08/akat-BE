import axios from 'axios';
import Bull from 'bull';
import qs from 'qs';
import prisma from '../config/prisma';
import { deleteMultipleFromR2 } from '../middlewares/upload.middleware';

export const facebookQueue = new Bull('facebook-sync', {
  redis: { port: 6379, host: 'localhost' },
});

export const createPostFacebook = async (data: any) => {
  try {
    let mediaIds = [];
    // Bước 1: Tải hình ảnh lên với published=false
    if (
      Array.isArray(data.post_avatar_url) &&
      data.post_avatar_url.length > 0
    ) {
      for (const url of data.post_avatar_url) {
        const photoParams = {
          url: url,
          access_token: data.access_token,
          published: false, // Không công khai ảnh ngay
          caption: data.content,
        };

        const photoBody = qs.stringify(photoParams);
        const photoRes = await axios.post(
          `https://graph.facebook.com/${data.facebook_fanpage_id}/photos`,
          photoBody,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          },
        );

        mediaIds.push(photoRes.data.id); // Lấy ID của từng ảnh
      }
    }
    // Bước 2: Đăng bài với object_attachment
    const postParams: any = {
      message: data.content,
      access_token: data.access_token,
      attached_media: mediaIds.map((id) => ({ media_fbid: id })),
    };
    if (mediaIds.length == 0) {
      delete postParams.attached_media;
    }
    const postBody = qs.stringify(postParams);
    console.log('postBody', postParams, postBody);
    const res = await axios.post(
      `https://graph.facebook.com/${data.facebook_fanpage_id}/feed`,
      postBody,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
    console.log('Post created successfully:', res.data);
    return res.data;
  } catch (error: any) {
    console.error('Error creating post:', {
      status: error.response?.status,
      headers: error.response?.headers,
      data: error.response?.data,
    });
    const draft = await prisma.facebookPostDraft.findUnique({
      where: { id: data.id },
    });
    if (draft) {
      await prisma.facebookPostDraft.update({
        where: { id: data.id },
        data: {
          status: 'failed',
          schedule: true,
        },
      });
    } else {
      console.warn(`Draft with id ${data.id} not found, skipping update.`);
    }
    await deleteMultipleFromR2(data.post_avatar_url);
  }
};

// Xử lý job trong queue
facebookQueue.process(async (job) => {
  const { data } = job; // Dữ liệu job
  const res = await createPostFacebook(data);
  if (res.id && data.id) {
    await prisma.facebookPostDraft.update({
      where: {
        id: data.id,
      },
      data: {
        schedule: true,
        status: 'published',
      },
    });
  }
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        console.log('Processing job with data:', data);
        resolve('Facebook sync completed');
      } catch (error) {
        reject(error);
      }
    }, 0);
  });
});
