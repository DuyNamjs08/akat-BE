import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../helpers/response';
import { httpReasonCodes } from '../helpers/reasonPhrases';
import { httpStatusCodes } from '../helpers/statusCodes';
import FacebookScheduleService from '../services/FacebookSchedule.service';
import { createPostFacebook, facebookQueue } from '../workers/facebook.worker';
import { uploadToR2 } from '../middlewares/upload.middleware';
import prisma from '../config/prisma';

const FacebookScheduleController = {
  createFacebookSchedule: async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const { scheduledTime, access_token, ...rest } = req.body;
      console.log('req.body', req.body);
      if (!req.files || (req.files as Express.Multer.File[]).length === 0) {
        res.status(400).json({ error: 'Không có file được tải lên!' });
        errorResponse(
          res,
          'Không có file được tải lên!',
          null,
          httpStatusCodes.INTERNAL_SERVER_ERROR,
        );
        return;
      }
      const fileUploadPromises = (req.files as Express.Multer.File[]).map(
        async (file) => {
          const timestamp = Date.now();
          const originalFilename = file.filename;
          const newFilename = `${originalFilename}-${timestamp}`;
          const result = await uploadToR2(
            file.path,
            `user-uploads/${newFilename}`,
          );
          return {
            url: `${process.env.R2_PUBLIC_URL}/${result.Key}`,
          };
        },
      );
      const fileUrls = await Promise.all(fileUploadPromises);
      console.log('fileUrls', fileUrls);
      // const now = new Date();
      // const twoMinutesLater = new Date(now.getTime() + 1 * 60 * 1000);
      const delay = new Date(scheduledTime).getTime() - Date.now();
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
        post_avatar_url: fileUrls.map((item) => item.url),
      });
      if (delay <= 0) {
        const result = await createPostFacebook({ ...response, access_token });
        if (result.id && response.id) {
          const createPost = await prisma.facebookPostDraft.update({
            where: {
              id: response.id,
            },
            data: {
              schedule: true,
            },
          });
          successResponse(res, 'Tạo bài viết thành công!', createPost);
          return;
        }
      }

      facebookQueue.add(
        { ...response, access_token },
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
      const data = req.query;
      const FacebookSchedules =
        await FacebookScheduleService.getAllFacebookSchedules();
      successResponse(
        res,
        'Danh sách facebook page insight',
        FacebookSchedules,
      );
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
