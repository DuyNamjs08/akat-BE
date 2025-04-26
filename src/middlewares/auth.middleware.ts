import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { errorResponse } from '../helpers/response';
import { httpStatusCodes } from '../helpers/statusCodes';
import { httpReasonCodes } from '../helpers/reasonPhrases';

const ACCESS_TOKEN_SECRET =
  process.env.ACCESS_TOKEN_SECRET || 'your-secret-key';

export const authenToken = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  try {
    const authorizationHeader = req.headers['authorization'];
    if (!authorizationHeader) {
      errorResponse(
        res,
        httpReasonCodes.UNAUTHORIZED,
        {},
        httpStatusCodes.UNAUTHORIZED,
      );
      return;
    }
    const token = authorizationHeader.split(' ')[1];
    if (!token) {
      errorResponse(
        res,
        httpReasonCodes.UNAUTHORIZED,
        {},
        httpStatusCodes.UNAUTHORIZED,
      );
      return;
    }

    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, data) => {
      if (err) {
        errorResponse(
          res,
          httpReasonCodes.FORBIDDEN,
          {},
          httpStatusCodes.FORBIDDEN,
        );
        return;
      }
      next();
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
