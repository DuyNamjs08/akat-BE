import { Request, Response, NextFunction } from 'express';
import logger from './logger';

const logError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (err) {
    logger.error(`Error occurred in ${req.method} ${req.url}: ${err.message}`);
    logger.error(`Stack Trace: ${err.stack}`);
  }

  res.status(500).json({ message: 'Internal Server Error' });
};

export default logError;
