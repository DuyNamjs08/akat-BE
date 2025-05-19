import dotenv from 'dotenv';
import fs from 'fs';
import AWS from 'aws-sdk';
import multer, { FileFilterCallback } from 'multer';
import path from 'path';
import { Request } from 'express';
import mime from 'mime-types';

dotenv.config();

// Cấu hình Multer để lưu file tạm thời
const storage = multer.diskStorage({
  destination: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => void,
  ): void => {
    const uploadDir = process.env.UPLOAD_FOLDER || './uploads';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, filename: string) => void,
  ): void => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  },
});

// Lọc file (ví dụ: chỉ cho phép JPEG, PNG, MP4)
const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback,
): void => {
  const allowedTypes = ['.jpg', '.jpeg', '.png', '.mp4'];
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowedTypes.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error('Loại file không được hỗ trợ!'));
  }
};

// Khởi tạo Multer
export const uploadMiddleware = multer({
  storage,
  fileFilter,
  limits: { fileSize: 100 * 1024 * 1024 }, // Giới hạn 100MB
});

// Cấu hình AWS S3 (Cloudflare R2)
const s3 = new AWS.S3({
  endpoint: process.env.CLOUDFLARE_ENDPOINT,
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
  region: 'auto',
  signatureVersion: 'v4',
});
const getMimeType = (filePath: string): string => {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.mp4') {
    return 'video/mp4';
  }
  const contentType = mime.lookup(filePath) || 'application/octet-stream';
  return contentType;
};

// Hàm upload lên R2
export const uploadToR2 = async (
  filePath: string,
  fileName: string,
): Promise<AWS.S3.ManagedUpload.SendData> => {
  const fileStats = fs.statSync(filePath);
  const contentType = getMimeType(filePath);
  try {
    const params: AWS.S3.PutObjectRequest = {
      Bucket: process.env.R2_BUCKET_NAME!,
      Key: fileName,
      Body: fs.createReadStream(filePath),
      ContentType: contentType,
    };

    const data = await s3.upload(params).promise();
    fs.unlinkSync(filePath); // Xóa file tạm sau khi upload thành công
    return data;
  } catch (err) {
    fs.unlinkSync(filePath); // Xóa file tạm nếu có lỗi
    throw err;
  }
};
export const deleteMultipleFromR2 = async (
  fileNames: string[],
): Promise<void> => {
  if (fileNames.length === 0) return;

  const params = {
    Bucket: process.env.R2_BUCKET_NAME!,
    Delete: {
      Objects: fileNames.map((name) => ({ Key: name })),
      Quiet: false,
    },
  };

  try {
    const result = await s3.deleteObjects(params).promise();
    console.log('Đã xóa các file:', result.Deleted);
  } catch (err) {
    console.error('Lỗi khi xóa nhiều file khỏi R2:', err);
  }
};
