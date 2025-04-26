import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const authenToken = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // "Bearer <token>"

  if (!token) {
    res.status(401).json({ message: 'Access token is missing' });
    return;
  }
  try {
    const authorizationHeader = req.headers['authorization'];
    if (!authorizationHeader) {
      res.status(401).json({
        message: 'not authorization',
      });
      return;
    }
    const token = authorizationHeader.split(' ')[1];
    if (!token) {
      res.status(401).json({
        message: 'not authorization',
      });
      return;
    }

    jwt.verify(token, JWT_SECRET, (err, data) => {
      if (err)
        return res.status(401).json({
          message: 'forbidan',
        });
      next();
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
