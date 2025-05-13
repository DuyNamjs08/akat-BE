import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../helpers/response';
import { httpStatusCodes } from '../helpers/statusCodes';
import prisma from '../config/prisma';

const configContentModerationController = {
  configContentModeration: async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const data = req.body;
      const exist = await prisma.moderationSetting.findFirst({
        where: {
          name: 'moderationConfig',
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
      const data = req.body;
      const exist = await prisma.moderationSetting.findFirst({
        where: {
          name: 'moderationConfig',
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
export default configContentModerationController;
