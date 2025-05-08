import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../helpers/response';
import { httpReasonCodes } from '../helpers/reasonPhrases';
import { httpStatusCodes } from '../helpers/statusCodes';
import FacebookFanPageService from '../services/FacebookFanPage.service';

const FacebookFanPageController = {
  createFacebookFanPage: async (req: Request, res: Response): Promise<void> => {
    try {
      const data = req.body;
      const FacebookFanPage =
        await FacebookFanPageService.getFacebookFanPageById(req.body.id);
      if (!FacebookFanPage) {
        const response =
          await FacebookFanPageService.createFacebookFanPage(data);
        successResponse(res, 'Tạo facebook fanpages thành công!', response);
        return;
      }
      const FacebookFanPageNew =
        await FacebookFanPageService.updateFacebookFanPage(
          req.body.id,
          req.body,
        );
      successResponse(res, 'Cập nhật fanpage thành công !', FacebookFanPageNew);
    } catch (error: any) {
      errorResponse(
        res,
        error?.message,
        error,
        httpStatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  },
  getAllFacebookFanPages: async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const FacebookFanPages =
        await FacebookFanPageService.getAllFacebookFanPages();
      successResponse(res, 'Danh sách fanpages', FacebookFanPages);
    } catch (error: any) {
      errorResponse(
        res,
        error?.message,
        error,
        httpStatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  },

  getFacebookFanPageById: async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const FacebookFanPage =
        await FacebookFanPageService.getFacebookFanPageById(req.params.id);
      successResponse(res, 'Success', FacebookFanPage);
    } catch (error: any) {
      errorResponse(
        res,
        error?.message,
        error,
        httpStatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  },

  updateFacebookFanPage: async (req: Request, res: Response): Promise<void> => {
    try {
      const FacebookFanPage =
        await FacebookFanPageService.getFacebookFanPageById(req.params.id);
      if (!FacebookFanPage) {
        errorResponse(
          res,
          httpReasonCodes.NOT_FOUND,
          {},
          httpStatusCodes.NOT_FOUND,
        );
        return;
      }
      const FacebookFanPageNew =
        await FacebookFanPageService.updateFacebookFanPage(
          req.params.id,
          req.body,
        );
      successResponse(res, 'Cập nhật fanpage thành công !', FacebookFanPageNew);
    } catch (error: any) {
      const statusCode = error.message.includes('not found') ? 404 : 400;
      if (statusCode === 404) {
        errorResponse(res, httpReasonCodes.NOT_FOUND, error, statusCode);
      } else {
        errorResponse(res, error?.message, error, statusCode);
      }
    }
  },

  deleteFacebookFanPage: async (req: Request, res: Response): Promise<void> => {
    try {
      const FacebookFanPage =
        await FacebookFanPageService.getFacebookFanPageById(req.params.id);
      if (!FacebookFanPage) {
        errorResponse(
          res,
          httpReasonCodes.NOT_FOUND,
          {},
          httpStatusCodes.NOT_FOUND,
        );
        return;
      }
      await FacebookFanPageService.deleteFacebookFanPage(req.params.id);
      successResponse(res, 'Xóa fanpage thành công !', FacebookFanPage);
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
export default FacebookFanPageController;
