import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../helpers/response';

import { httpStatusCodes } from '../helpers/statusCodes';
import { NotificationModel } from '../models/Notification.model';

const NotiController = {
  getAllNoti: async (req: Request, res: Response): Promise<void> => {
    try {
      const { userId } = req.query;
      const totalCount = await NotificationModel.countDocuments({ userId });
      const Noti = await NotificationModel.find({ userId }).sort({
        createdAt: -1,
      });

      successResponse(res, 'Danh sách facebook Noti', {
        totalCount,
        data: Noti,
      });
    } catch (error: any) {
      errorResponse(
        res,
        error?.message,
        error,
        httpStatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  },
  updateNoti: async (req: Request, res: Response): Promise<void> => {
    try {
      const { userId, id } = req.body;
      const Noti = await NotificationModel.find({
        userId,
        _id: id,
      })
        .sort({
          createdAt: -1,
        })
        .set({ isRead: true });

      successResponse(res, 'Update Noti success!', Noti);
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
export default NotiController;
