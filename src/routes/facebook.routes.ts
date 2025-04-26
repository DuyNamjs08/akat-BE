import express from 'express';
const router = express.Router();

import {
  getAllFacebookPosts,
  createFacebookPost,
} from '../controllers/facebook.controller';
import { authenToken } from '../middlewares/auth.middleware';

/**
 * @swagger
 * /api/v1/facebook:
 *   get:
 *     summary: Lấy danh sách tất cả các bài post trên Facebook
 *     tags: [Facebook]
 *     responses:
 *       200:
 *         description: Thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       message:
 *                         type: string
 */
router.get('/facebook', getAllFacebookPosts);
router.get('/facebook1', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Hello from Facebook',
    data: [
      {
        id: '1',
        message: 'Hello from Facebook 1',
      },
      {
        id: '2',
        message: 'Hello from Facebook 2',
      },
      {
        id: '3',
        message: 'Hello from Facebook 2',
      },
    ],
  });
});

/**
 * @swagger
 * /api/v1/facebook:
 *   post:
 *     summary: Tạo một Facebook post mới
 *     tags: [Facebook]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - message
 *             properties:
 *               message:
 *                 type: string
 *                 example: "Hello from Swagger"
 *     responses:
 *       201:
 *         description: Tạo thành công
 */
router.post('/facebook', createFacebookPost);

export default router;
