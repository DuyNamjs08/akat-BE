import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../helpers/response';
import { httpReasonCodes } from '../helpers/reasonPhrases';
import { httpStatusCodes } from '../helpers/statusCodes';
import UserService from '../services/User.service';
import bcrypt from 'bcrypt';

const userController = {
  createUser: async (req: Request, res: Response): Promise<void> => {
    try {
      const userExists = await UserService.getUserByEmail(req.body.email);
      if (userExists) {
        errorResponse(res, 'Email đã tồn tại', {}, httpStatusCodes.CONFLICT);
        return;
      }
      const { password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      req.body.password = hashedPassword;
      const user = await UserService.createUser(req.body);
      successResponse(res, 'Tạo người dùng thành công', user);
    } catch (error: any) {
      errorResponse(
        res,
        error?.message,
        error,
        httpStatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  },
  getAllUsers: async (req: Request, res: Response): Promise<void> => {
    try {
      const Users = await UserService.getAllUsers();
      successResponse(res, 'Danh sách người dùng', Users);
    } catch (error: any) {
      errorResponse(
        res,
        error?.message,
        error,
        httpStatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  },

  getUserById: async (req: Request, res: Response): Promise<void> => {
    try {
      const User = await UserService.getUserById(req.params.id);
      successResponse(res, 'Success', User);
    } catch (error: any) {
      errorResponse(
        res,
        error?.message,
        error,
        httpStatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  },

  updateUser: async (req: Request, res: Response): Promise<void> => {
    try {
      const User = await UserService.getUserById(req.params.id);
      if (!User) {
        errorResponse(
          res,
          httpReasonCodes.NOT_FOUND,
          {},
          httpStatusCodes.NOT_FOUND,
        );
        return;
      }
      const UserNew = await UserService.updateUser(req.params.id, req.body);
      successResponse(res, 'Cập nhật người dùng thành công !', UserNew);
    } catch (error: any) {
      const statusCode = error.message.includes('not found') ? 404 : 400;
      if (statusCode === 404) {
        errorResponse(res, httpReasonCodes.NOT_FOUND, error, statusCode);
      } else {
        errorResponse(res, error?.message, error, statusCode);
      }
    }
  },

  deleteUser: async (req: Request, res: Response): Promise<void> => {
    try {
      const User = await UserService.getUserById(req.params.id);
      if (!User) {
        errorResponse(
          res,
          httpReasonCodes.NOT_FOUND,
          {},
          httpStatusCodes.NOT_FOUND,
        );
        return;
      }
      await UserService.deleteUser(req.params.id);
      successResponse(res, 'Xóa người dùng thành công !', User);
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
export default userController;
