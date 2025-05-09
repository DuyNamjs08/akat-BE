import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../helpers/response';
import { httpReasonCodes } from '../helpers/reasonPhrases';
import { httpStatusCodes } from '../helpers/statusCodes';
import FacebookInsightService from '../services/FacebookInsight.service';
import { facebookInsightQueue } from '../workers/facebook-repeate.worker';

const FacebookInsightController = {
  createFacebookInsight: async (req: Request, res: Response): Promise<void> => {
    try {
      const connections =
        await FacebookInsightService.getFacebookInsightByFacebookFanpageId(
          req.body.facebook_fanpage_id,
          req.body.user_id,
        );
      if (connections) {
        const FacebookInsightNew =
          await FacebookInsightService.updateFacebookInsight(
            connections.id,
            req.body,
          );
        successResponse(
          res,
          'Cập nhật facebook page insight thành công !',
          FacebookInsightNew,
        );
        return;
      }
      const data = req.body;
      const response = await FacebookInsightService.createFacebookInsight(data);
      successResponse(res, 'Tạo facebook page insight thành công!', response);
    } catch (error: any) {
      errorResponse(
        res,
        error?.message,
        error,
        httpStatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  },
  asyncFacebookInsight: async (req: Request, res: Response): Promise<void> => {
    try {
      const data = req.body;
      console.log('dữ liệu body', data);
      await facebookInsightQueue.add(
        { message: 'Sync Facebook insight', id: 'user_123' },
        {
          jobId: 'facebook-sync-user_123',
          repeat: { every: 60 * 1000 },
          removeOnComplete: true,
          removeOnFail: true,
        },
      );
      successResponse(
        res,
        'Đồng bộ dữ liệu facebook page insight thành công!',
        {
          async: true,
        },
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
  getAllFacebookInsights: async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const data = req.query;
      const FacebookInsights =
        await FacebookInsightService.getAllFacebookInsights(data);
      successResponse(res, 'Danh sách facebook page insight', FacebookInsights);
    } catch (error: any) {
      errorResponse(
        res,
        error?.message,
        error,
        httpStatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  },

  getFacebookInsightById: async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const FacebookInsight =
        await FacebookInsightService.getFacebookInsightById(req.params.id);
      successResponse(res, 'Success', FacebookInsight);
    } catch (error: any) {
      errorResponse(
        res,
        error?.message,
        error,
        httpStatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  },

  updateFacebookInsight: async (req: Request, res: Response): Promise<void> => {
    try {
      const FacebookInsight =
        await FacebookInsightService.getFacebookInsightById(req.params.id);
      if (!FacebookInsight) {
        errorResponse(
          res,
          httpReasonCodes.NOT_FOUND,
          {},
          httpStatusCodes.NOT_FOUND,
        );
        return;
      }
      const FacebookInsightNew =
        await FacebookInsightService.updateFacebookInsight(
          req.params.id,
          req.body,
        );
      successResponse(
        res,
        'Cập nhật facebook page insight thành công !',
        FacebookInsightNew,
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

  deleteFacebookInsight: async (req: Request, res: Response): Promise<void> => {
    try {
      const FacebookInsight =
        await FacebookInsightService.getFacebookInsightById(req.params.id);
      if (!FacebookInsight) {
        errorResponse(
          res,
          httpReasonCodes.NOT_FOUND,
          {},
          httpStatusCodes.NOT_FOUND,
        );
        return;
      }
      await FacebookInsightService.deleteFacebookInsight(req.params.id);
      successResponse(
        res,
        'Xóa facebook page insight thành công !',
        FacebookInsight,
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

  deleteFacebookInsightWithConnection: async (req: Request, res: Response) => {
    try {
      const pageInsights =
        await FacebookInsightService.getFacebookInsightByFacebookFanpageId(
          req.body.facebook_fanpage_id,
          req.body.user_id,
        );

      if (pageInsights?.id) {
        await FacebookInsightService.deleteFacebookInsight(pageInsights.id);
      } else {
        throw new Error('Không tìm thấy Facebook Page Insight với id hợp lệ');
      }

      successResponse(
        res,
        'Xóa facebook page insight thành công !',
        pageInsights,
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
};
export default FacebookInsightController;
