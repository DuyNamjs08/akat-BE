import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../helpers/response';
import { httpReasonCodes } from '../helpers/reasonPhrases';
import { httpStatusCodes } from '../helpers/statusCodes';
import FacebookInsightService from '../services/FacebookInsight.service';

const FacebookInsightController = {
  createFacebookInsight: async (req: Request, res: Response): Promise<void> => {
    try {
      const connections =
        await FacebookInsightService.getFacebookInsightByFacebookFanpageId(
          req.body.facebook_fanpage_id,
          req.body.user_id,
        );
      if (connections) {
        errorResponse(
          res,
          'Tài khoản đã có Facebook page insight từ trước',
          {},
          httpStatusCodes.INTERNAL_SERVER_ERROR,
        );
        return;
      }
      const data = req.body;
      const response = await FacebookInsightService.createFacebookInsight(data);
      successResponse(res, 'Tạo facebook page insight thành công!', response);
    } catch (error) {
      errorResponse(
        res,
        'Internet server error',
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
      const FacebookInsights =
        await FacebookInsightService.getAllFacebookInsights();
      successResponse(res, 'Danh sách facebook page insight', FacebookInsights);
    } catch (error) {
      errorResponse(
        res,
        'Internet server error',
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
    } catch (error) {
      errorResponse(
        res,
        'Internet server error',
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
        errorResponse(res, 'Internet server error', error, statusCode);
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
        errorResponse(res, 'Internet server error', error, statusCode);
      }
    }
  },
};
export default FacebookInsightController;
