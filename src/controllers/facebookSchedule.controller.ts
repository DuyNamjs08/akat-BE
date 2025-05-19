import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../helpers/response';
import { httpReasonCodes } from '../helpers/reasonPhrases';
import { httpStatusCodes } from '../helpers/statusCodes';
import FacebookScheduleService from '../services/FacebookSchedule.service';
import { createPostFacebook, facebookQueue } from '../workers/facebook.worker';
import { uploadToR2 } from '../middlewares/upload.middleware';
import prisma from '../config/prisma';
import {
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  differenceInDays,
  format,
  addDays,
} from 'date-fns';

const FacebookScheduleController = {
  createFacebookSchedule: async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const { scheduledTime, access_token, type, ...rest } = req.body;
      const delay = new Date(scheduledTime).getTime() - Date.now();
      console.log('req.body', req.body);
      if (!req.files || (req.files as Express.Multer.File[]).length === 0) {
        const response = await FacebookScheduleService.createFacebookSchedule({
          ...rest,
          likes: 0,
          comments: 0,
          shares: 0,
        });
        await prisma.facebookPostDraft.update({
          where: {
            id: response.id,
          },
          data: {
            schedule: true,
            status: 'pending',
          },
        });
        if (delay <= 0) {
          const result = await createPostFacebook({
            ...response,
            access_token,
            type,
          });
          if (result && response.id) {
            const createPost = await prisma.facebookPostDraft.update({
              where: {
                id: response.id,
              },
              data: {
                schedule: true,
                status: 'published',
              },
            });
            successResponse(res, 'Tạo bài viết thành công!', createPost);
            return;
          }
        }
        facebookQueue.add(
          { ...response, access_token, type },
          {
            delay,
            attempts: 3, // Thử lại nếu lỗi
            removeOnComplete: true,
            removeOnFail: true,
          },
        );
        successResponse(res, 'Lên lịch bài viết thành công!!', response);
        return;
      }
      const allFiles = req.files as Express.Multer.File[];
      const images = allFiles.filter((file) =>
        file.mimetype.startsWith('image/'),
      );
      const videos = allFiles.filter((file) =>
        file.mimetype.startsWith('video/'),
      );
      const uploadFiles = async (
        files: Express.Multer.File[],
        type: 'image' | 'video',
      ) => {
        return Promise.all(
          files.map(async (file) => {
            const timestamp = Date.now();
            const originalFilename = file.originalname.replace(/\s/g, '_');
            const newFilename = `${originalFilename}-${timestamp}`;
            const result = await uploadToR2(
              file.path,
              `user-uploads/${newFilename}`,
            );
            return {
              url: `${process.env.R2_PUBLIC_URL}/${result.Key}`,
              type, // 'image' hoặc 'video'
            };
          }),
        );
      };
      const [imageUploads, videoUploads] = await Promise.all([
        uploadFiles(images, 'image'),
        uploadFiles(videos, 'video'),
      ]);
      console.log('imageUploads,videoUploads', imageUploads, videoUploads);
      console.log(
        'delay',
        new Date(scheduledTime).getTime(),
        Date.now(),
        delay,
      );
      const response = await FacebookScheduleService.createFacebookSchedule({
        ...rest,
        likes: 0,
        comments: 0,
        shares: 0,
        post_avatar_url: imageUploads.map((item) => item.url),
        post_video_url: videoUploads.map((item) => item.url),
      });
      if (delay <= 0) {
        const result = await createPostFacebook({
          ...response,
          access_token,
          type,
        });
        if (result && response.id) {
          const createPost = await prisma.facebookPostDraft.update({
            where: {
              id: response.id,
            },
            data: {
              schedule: true,
              status: 'published',
            },
          });
          successResponse(res, 'Tạo bài viết thành công!', createPost);
          return;
        }
      }
      await prisma.facebookPostDraft.update({
        where: {
          id: response.id,
        },
        data: {
          schedule: true,
          status: 'pending',
        },
      });
      facebookQueue.add(
        { ...response, access_token, type },
        {
          delay,
          attempts: 3, // Thử lại nếu lỗi
          removeOnComplete: true,
          removeOnFail: true,
        },
      );
      successResponse(res, 'Lên lịch bài viết thành công!', response);
    } catch (error: any) {
      errorResponse(
        res,
        error?.message,
        error,
        httpStatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  },
  getAllFacebookSchedules: async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const { user_id, date, type, listPageId = [] } = req.query;
      console.log('listPageId', listPageId);
      const inputDate = new Date();
      if (!user_id) {
        errorResponse(
          res,
          'Không user_id!',
          null,
          httpStatusCodes.INTERNAL_SERVER_ERROR,
        );
        return;
      }
      if (!date) {
        errorResponse(
          res,
          'Ngày là bắt buộc!',
          null,
          httpStatusCodes.INTERNAL_SERVER_ERROR,
        );
        return;
      }
      let listInsight = [];
      if (
        typeof listPageId === 'string' &&
        Array.isArray(JSON.parse(listPageId)) &&
        JSON.parse(listPageId).length > 0
      ) {
        listInsight = await prisma.facebookPageInsights.findMany({
          where: {
            facebook_fanpage_id: {
              in: JSON.parse(listPageId) as string[],
            },
          },
        });
      } else {
        listInsight = await prisma.facebookPageInsights.findMany({
          where: {
            user_id: typeof user_id === 'string' ? user_id : undefined,
          },
        });
      }
      if (listInsight.length == 0) {
        successResponse(res, 'Danh sách facebook schedule', []);
        return;
      }
      if (type == 'week') {
        const weekStart = startOfWeek(inputDate, { weekStartsOn: 1 });
        const weekEnd = endOfWeek(inputDate, { weekStartsOn: 1 });
        const posts = await prisma.facebookPostDraft.findMany({
          where: {
            facebook_fanpage_id: {
              in: listInsight.map((item) => item.facebook_fanpage_id),
            },
            posted_at: {
              gte: weekStart,
              lte: weekEnd,
            },
          },
          orderBy: {
            created_at: 'desc',
          },
        });
        const numDays = differenceInDays(weekEnd, weekStart) + 1;
        const dateArray = Array.from({ length: numDays }, (_, i) => ({
          date: format(addDays(weekStart, i), 'yyyy-MM-dd'),
          list: [] as typeof posts,
        }));
        posts.forEach((post) => {
          const postDate = format(new Date(post.posted_at), 'yyyy-MM-dd');

          const matchedDay = dateArray.find((d) => d.date === postDate);
          if (matchedDay) {
            matchedDay.list.push(post);
          }
        });
        successResponse(res, 'Danh sách facebook schedule', dateArray);
        return;
      } else if (type == 'month') {
        const monthStart = startOfMonth(inputDate);
        const monthEnd = endOfMonth(inputDate);
        const posts = await prisma.facebookPostDraft.findMany({
          where: {
            facebook_fanpage_id: {
              in: listInsight.map((item) => item.facebook_fanpage_id),
            },
            posted_at: {
              gte: monthStart,
              lte: monthEnd,
            },
          },
          orderBy: {
            created_at: 'desc',
          },
        });
        const numDays = differenceInDays(monthEnd, monthStart) + 1;
        const dateArray = Array.from({ length: numDays }, (_, i) => ({
          date: format(addDays(monthStart, i), 'yyyy-MM-dd'),
          list: [] as typeof posts,
        }));
        posts.forEach((post) => {
          const postDate = format(new Date(post.posted_at), 'yyyy-MM-dd');

          const matchedDay = dateArray.find((d) => d.date === postDate);
          if (matchedDay) {
            matchedDay.list.push(post);
          }
        });
        successResponse(res, 'Danh sách facebook schedule', dateArray);
        return;
      } else {
        errorResponse(
          res,
          'Type không hợp lệ',
          null,
          httpStatusCodes.INTERNAL_SERVER_ERROR,
        );
        return;
      }
    } catch (error: any) {
      errorResponse(
        res,
        error?.message,
        error,
        httpStatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  },

  getFacebookScheduleById: async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const FacebookSchedule =
        await FacebookScheduleService.getFacebookScheduleById(req.params.id);
      successResponse(res, 'Success', FacebookSchedule);
    } catch (error: any) {
      errorResponse(
        res,
        error?.message,
        error,
        httpStatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  },

  updateFacebookSchedule: async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const FacebookSchedule =
        await FacebookScheduleService.getFacebookScheduleById(req.params.id);
      if (!FacebookSchedule) {
        errorResponse(
          res,
          httpReasonCodes.NOT_FOUND,
          {},
          httpStatusCodes.NOT_FOUND,
        );
        return;
      }
      const FacebookScheduleNew =
        await FacebookScheduleService.updateFacebookSchedule(
          req.params.id,
          req.body,
        );
      successResponse(
        res,
        'Cập nhật facebook page insight thành công !',
        FacebookScheduleNew,
      );
    } catch (error: any) {
      const statusCode = error.message.includes('not found') ? 404 : 400;
      if (statusCode === 404) {
        errorResponse(res, httpReasonCodes.NOT_FOUND, error, statusCode);
      } else {
        errorResponse(res, error?.message, error, statusCode);
      }
    }
  },

  deleteFacebookSchedule: async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const FacebookSchedule =
        await FacebookScheduleService.getFacebookScheduleById(req.params.id);
      if (!FacebookSchedule) {
        errorResponse(
          res,
          httpReasonCodes.NOT_FOUND,
          {},
          httpStatusCodes.NOT_FOUND,
        );
        return;
      }
      await FacebookScheduleService.deleteFacebookSchedule(req.params.id);
      successResponse(
        res,
        'Xóa facebook page insight thành công !',
        FacebookSchedule,
      );
    } catch (error: any) {
      const statusCode = error.message.includes('not found') ? 404 : 400;
      if (statusCode === 404) {
        errorResponse(res, httpReasonCodes.NOT_FOUND, error, statusCode);
      } else {
        errorResponse(res, error?.message, error, statusCode);
      }
    }
  },
};
export default FacebookScheduleController;
