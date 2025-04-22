import { Request, Response, NextFunction } from 'express';
import logger from './logger';

// Middleware log phản hồi
export const logResponse = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const originalSend = res.send.bind(res);

  res.send = (body: any): Response => {
    // Ghi log mã trạng thái và thông tin phản hồi
    logger.info(`Response: ${res.statusCode} ${req.method} ${req.url}`);
    logger.debug(
      `Response Body: ${typeof body === 'string' ? body : JSON.stringify(body)}`,
    );

    // Gửi phản hồi như bình thường
    return originalSend(body);
  };

  next();
};
