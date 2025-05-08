import roleService from '../services/Roles.service';
import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../helpers/response';
import { httpReasonCodes } from '../helpers/reasonPhrases';
import { httpStatusCodes } from '../helpers/statusCodes';
import UserService from '../services/User.service';
const roleController = {
  createRole: async (req: Request, res: Response): Promise<void> => {
    try {
      const roleNameExist = await roleService.getRoleByName(req.body.name);
      if (roleNameExist) {
        errorResponse(
          res,
          'Quyền đã tồn tại!',
          {},
          httpStatusCodes.INTERNAL_SERVER_ERROR,
        );
        return;
      }
      const role = await roleService.createRole(req.body.name);
      successResponse(res, 'Tạo quyền thành công', role);
    } catch (error: any) {
      errorResponse(
        res,
        error?.message,
        error,
        httpStatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  },

  getAllRoles: async (req: Request, res: Response): Promise<void> => {
    try {
      const roles = await roleService.getAllRoles();
      successResponse(res, 'Danh sách quyền', roles);
    } catch (error: any) {
      errorResponse(
        res,
        error?.message,
        error,
        httpStatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  },

  getRoleById: async (req: Request, res: Response): Promise<void> => {
    try {
      const role = await roleService.getRoleById(req.params.id);
      successResponse(res, 'Success', role);
    } catch (error: any) {
      errorResponse(
        res,
        error?.message,
        error,
        httpStatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  },

  updateRole: async (req: Request, res: Response): Promise<void> => {
    try {
      const role = await roleService.getRoleById(req.params.id);
      if (!role) {
        errorResponse(
          res,
          httpReasonCodes.NOT_FOUND,
          {},
          httpStatusCodes.NOT_FOUND,
        );
        return;
      }
      const roleNew = await roleService.updateRole(req.params.id, req.body);
      successResponse(res, 'Cập nhật quyền thành công !', roleNew);
    } catch (error: any) {
      const statusCode = error.message.includes('not found') ? 404 : 400;
      if (statusCode === 404) {
        errorResponse(res, httpReasonCodes.NOT_FOUND, error, statusCode);
      } else {
        errorResponse(res, error?.message, error, statusCode);
      }
    }
  },

  deleteRole: async (req: Request, res: Response): Promise<void> => {
    try {
      const role = await roleService.getRoleById(req.params.id);
      if (!role) {
        errorResponse(res, httpReasonCodes.NOT_FOUND, {}, 404);
        return;
      }
      const users = await UserService.getUserByRoleId(req.params.id);
      await Promise.all(users.map((item) => UserService.deleteUser(item.id)));
      await roleService.deleteRole(req.params.id);
      successResponse(res, 'Xóa quyền thành công !', role);
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

export default roleController;
