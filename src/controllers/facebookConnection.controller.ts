import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../helpers/response';
import { httpReasonCodes } from '../helpers/reasonPhrases';
import { httpStatusCodes } from '../helpers/statusCodes';
import FacebookConnectionService from '../services/FacebookConnection.service';
import UserService from '../services/User.service';
import FacebookFanPageService from '../services/FacebookFanPage.service';

const FacebookConnectionController = {
  createFacebookConnection: async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const data = req.body;
      const User = await UserService.getUserById(req.body.user_id);
      if (!User) {
        errorResponse(
          res,
          'Không tìm thấy tài khoản',
          {},
          httpStatusCodes.NOT_FOUND,
        );
        return;
      }
      const FacebookFanPage =
        await FacebookFanPageService.getFacebookFanPageById(
          req.body.facebook_fanpage_id,
        );
      if (!FacebookFanPage) {
        errorResponse(
          res,
          'Không tìm thấy Fanpage',
          {},
          httpStatusCodes.NOT_FOUND,
        );
        return;
      }
      const connections =
        await FacebookConnectionService.getFacebookConnectionByFacebookFanpageId(
          req.body.facebook_fanpage_id,
          req.body.user_id,
        );
      if (connections) {
        const FacebookConnectionNew =
          await FacebookConnectionService.updateFacebookConnection(
            req.params.id,
            req.body,
          );
        successResponse(
          res,
          'Cập nhật facebook connections thành công !',
          FacebookConnectionNew,
        );
        return;
      }
      const response =
        await FacebookConnectionService.createFacebookConnection(data);
      successResponse(res, 'Tạo facebook connections thành công!', response);
    } catch (error: any) {
      errorResponse(
        res,
        error?.message,
        error,
        httpStatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  },
  getAllFacebookConnections: async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const data = req.query;
      const FacebookConnections =
        await FacebookConnectionService.getAllFacebookConnections(data);
      successResponse(
        res,
        'Danh sách facebook connections',
        FacebookConnections,
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

  getFacebookConnectionById: async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const FacebookConnection =
        await FacebookConnectionService.getFacebookConnectionById(
          req.params.id,
        );
      successResponse(res, 'Success', FacebookConnection);
    } catch (error: any) {
      errorResponse(
        res,
        error?.message,
        error,
        httpStatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  },

  updateFacebookConnection: async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const FacebookConnection =
        await FacebookConnectionService.getFacebookConnectionById(
          req.params.id,
        );
      if (!FacebookConnection) {
        errorResponse(
          res,
          httpReasonCodes.NOT_FOUND,
          {},
          httpStatusCodes.NOT_FOUND,
        );
        return;
      }
      const User = await UserService.getUserById(req.body.user_id);
      if (!User) {
        errorResponse(
          res,
          'Không tìm thấy tài khoản',
          {},
          httpStatusCodes.NOT_FOUND,
        );
        return;
      }
      const FacebookFanPage =
        await FacebookFanPageService.getFacebookFanPageById(
          req.body.facebook_fanpage_id,
        );
      if (!FacebookFanPage) {
        errorResponse(
          res,
          'Không tìm thấy Fanpage',
          {},
          httpStatusCodes.NOT_FOUND,
        );
        return;
      }
      const FacebookConnectionNew =
        await FacebookConnectionService.updateFacebookConnection(
          req.params.id,
          req.body,
        );
      successResponse(
        res,
        'Cập nhật facebook connections thành công !',
        FacebookConnectionNew,
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

  deleteFacebookConnection: async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      const FacebookConnection =
        await FacebookConnectionService.getFacebookConnectionById(
          req.params.id,
        );
      if (!FacebookConnection) {
        errorResponse(
          res,
          httpReasonCodes.NOT_FOUND,
          {},
          httpStatusCodes.NOT_FOUND,
        );
        return;
      }
      await FacebookConnectionService.deleteFacebookConnection(req.params.id);
      successResponse(
        res,
        'Xóa facebook connections thành công !',
        FacebookConnection,
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
export default FacebookConnectionController;
