import axios from 'axios';
import Bull from 'bull';
import qs from 'qs';
import prisma from '../config/prisma';
import { deleteMultipleFromR2 } from '../middlewares/upload.middleware';

export const facebookQueue = new Bull('facebook-sync', {
  redis: { port: 6379, host: 'localhost' },
  limiter: {
    max: 10, // tối đa 10 job
    duration: 1000, // mỗi 1000ms
  },
});

export const createPostFacebook = async (data: any) => {
  try {
    let mediaIds = [];
    // Bước 1: Tải hình ảnh/video lên với published=false
    if (
      Array.isArray(data.post_avatar_url) &&
      data.post_avatar_url.length > 0 &&
      !data.type
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

        mediaIds.push({ media_fbid: photoRes.data.id });
      }
    }
    if (
      Array.isArray(data.post_avatar_url) &&
      data.post_avatar_url.length > 0 &&
      data.type === 'photo_stories'
    ) {
      for (const url of data.post_avatar_url) {
        const photoParams = {
          url: url,
          access_token: data.access_token,
          published: false, // Không công khai ảnh ngay
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
        console.log('photoRes', photoRes.data);
        const { id } = photoRes.data;
        const uploadPhotoRes = await axios.post(
          `https://graph.facebook.com/${data.facebook_fanpage_id}/photo_stories?photo_id=${id}&access_token=${data.access_token}`,
        );
        console.log('uploadPhotoRes', uploadPhotoRes.data);
        return uploadPhotoRes.data;
      }
    }
    // Upload video
    if (
      Array.isArray(data.post_video_url) &&
      data.post_video_url.length > 0 &&
      data.type === 'video'
    ) {
      for (const url of data.post_video_url) {
        const videoParams = {
          file_url: url,
          access_token: data.access_token,
          title: 'Video tiêu đề',
          description: data.content,
        };
        console.log('videoParams', videoParams);
        const videoBody = qs.stringify(videoParams);
        const videoRes = await axios.post(
          `https://graph.facebook.com/${data.facebook_fanpage_id}/videos`,
          videoBody,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          },
        );
        return videoRes.data;
      }
    }
    // Upload video_stories
    if (
      Array.isArray(data.post_video_url) &&
      data.post_video_url.length > 0 &&
      data.type === 'video_stories'
    ) {
      for (const url of data.post_video_url) {
        const videoParams = {
          access_token: data.access_token,
          upload_phase: 'start',
        };

        const videoBody = qs.stringify(videoParams);
        const videoRes = await axios.post(
          `https://graph.facebook.com/${data.facebook_fanpage_id}/video_stories`,
          videoBody,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          },
        );
        const { upload_url, video_id } = videoRes.data;
        const uploadVideo = await axios.post(
          upload_url,
          {},
          {
            headers: {
              Authorization: `OAuth ${data.access_token}`,
              file_url: url,
            },
          },
        );
        if (uploadVideo.data.success) {
          const finishParams = {
            access_token: data.access_token,
            upload_phase: 'finish',
            video_id: video_id,
          };
          const finishBody = qs.stringify(finishParams);
          const finishRes = await axios.post(
            `https://graph.facebook.com/${data.facebook_fanpage_id}/video_stories`,
            finishBody,
            {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
            },
          );
          console.log('finishRes', finishRes.data);
          return finishRes.data;
        }
        return videoRes.data;
      }
    }
    console.log('mediaIds', mediaIds);
    // Bước 2: Đăng bài với object_attachment
    const postParams: any = {
      message: data.content,
      access_token: data.access_token,
      attached_media: mediaIds,
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
    await deleteMultipleFromR2(data.post_video_url);
  }
};

// Xử lý job trong queue
facebookQueue.process(5, async (job) => {
  const { data } = job; // Dữ liệu job
  const res = await createPostFacebook(data);
  if (res && data.id) {
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
