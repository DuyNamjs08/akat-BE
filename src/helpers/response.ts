import { Response } from 'express';

export const successResponse = (
  res: Response,
  message: string = 'Success',
  data: any = {},
  statusCode: number = 200,
): Response => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

export const errorResponse = (
  res: Response,
  message: string = 'Error',
  error: any = {},
  statusCode: number = 500,
): Response => {
  return res.status(statusCode).json({
    success: false,
    message,
    error,
  });
};
