import express from 'express';
import { uploadMiddleware, uploadToR2 } from '../middlewares/upload.middleware';
import { Request, Response } from 'express';

const router = express.Router();
router.post(
  '/upload',
  uploadMiddleware.array('files', 10), // "files" là field name trong FormData
  async (req: Request, res: Response): Promise<void> => {
    try {
      if (!req.files || (req.files as Express.Multer.File[]).length === 0) {
        res.status(400).json({ error: 'Không có file được tải lên!' });
        return;
      }

      const fileUploadPromises = (req.files as Express.Multer.File[]).map(
        async (file) => {
          const timestamp = Date.now();
          const originalFilename = file.filename;
          const newFilename = `${originalFilename}-${timestamp}`;
          const result = await uploadToR2(
            file.path,
            `user-uploads/${newFilename}`,
          );
          return {
            url: `${process.env.R2_PUBLIC_URL}/${result.Key}`,
          };
        },
      );
      const fileUrls = await Promise.all(fileUploadPromises);

      res.json({
        success: true,
        files: fileUrls,
      });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  },
);
export default router;
