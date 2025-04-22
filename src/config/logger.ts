import winston, { format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

// Cấu hình DailyRotateFile transport
const dailyRotateTransport = new DailyRotateFile({
  filename: 'logs/%DATE%-results.log',
  datePattern: 'YYYY-MM-DD',
  maxSize: '20m',
  maxFiles: '14d',
});

// Tạo logger
const logger = winston.createLogger({
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    }),
  ),
  transports: [
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    }),
    new transports.File({ filename: 'logs/app.log' }),
    dailyRotateTransport,
  ],
});

export default logger;
