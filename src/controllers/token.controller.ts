import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../helpers/response';
import { httpStatusCodes } from '../helpers/statusCodes';
import TokenService from '../services/Token.service';
import UserService from '../services/User.service';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const TokenController = {
  createAccessToken: async (req: Request, res: Response): Promise<void> => {
    try {
      const data = req.body;
      const user = await UserService.getUserByEmail(data.email);
      if (!user) {
        errorResponse(
          res,
          'Tài khoản không tồn tại',
          {},
          httpStatusCodes.NOT_FOUND,
        );
        return;
      }
      const byHash = await bcrypt.compare(req.body.password, user.password);
      if (!byHash) {
        errorResponse(
          res,
          'Tài khoản hoặc mật khẩu không chính xác',
          {},
          httpStatusCodes.UNAUTHORIZED,
        );
        return;
      }
      if (
        !process.env.ACCESS_TOKEN_SECRET ||
        !process.env.REFRESH_TOKEN_SECRET
      ) {
        errorResponse(
          res,
          'Token secrets are not defined in environment variables',
          {},
          httpStatusCodes.INTERNAL_SERVER_ERROR,
        );
        return;
      }
      const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1m',
      });
      const refreshToken = jwt.sign(data, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '3m',
      });
      const tokenExists = await TokenService.findTokenByUserId({
        user_id: user.id,
      });
      if (tokenExists) {
        const Token = await TokenService.updateAccessToken(user.id, {
          user_id: user.id,
          access_token: accessToken,
          refresh_token: refreshToken,
        });
        successResponse(res, 'Success', Token);
        return;
      }
      const Token = await TokenService.createtoken({
        data: {
          user_id: user.id,
          access_token: accessToken,
          refresh_token: refreshToken,
        },
      });
      successResponse(res, 'Success create', Token);
    } catch (error: any) {
      errorResponse(
        res,
        error?.message,
        error,
        httpStatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  },
  updateAccessToken: async (req: Request, res: Response): Promise<void> => {
    try {
      const { refresh_token, email, password } = req.body;
      if (!refresh_token) {
        errorResponse(
          res,
          'Refresh token không được để trống',
          {},
          httpStatusCodes.BAD_REQUEST,
        );
        return;
      }
      const user = await UserService.getUserByEmail(email);
      if (!user) {
        errorResponse(
          res,
          'Tài khoản không tồn tại',
          {},
          httpStatusCodes.NOT_FOUND,
        );
        return;
      }
      if (
        !process.env.ACCESS_TOKEN_SECRET ||
        !process.env.REFRESH_TOKEN_SECRET
      ) {
        errorResponse(
          res,
          'Token secrets are not defined in environment variables',
          null,
          httpStatusCodes.INTERNAL_SERVER_ERROR,
        );
        return;
      }
      jwt.verify(
        refresh_token,
        process.env.REFRESH_TOKEN_SECRET,
        async (err: any, data: any) => {
          if (err) {
            return res.status(401).json('refresh token không hợp lệ');
          }
          const accessToken = jwt.sign(
            { mail: data.email, password: data.password },
            process.env.ACCESS_TOKEN_SECRET as string,
            {
              expiresIn: '1m',
            },
          );
          const updateAccessToken = await TokenService.updateAccessToken(
            user.id,
            {
              access_token: accessToken,
              refresh_token: refresh_token,
              user_id: user.id,
            },
          );
          successResponse(
            res,
            'Cập nhật access token thành công',
            updateAccessToken,
          );
          return;
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
};
export default TokenController;
