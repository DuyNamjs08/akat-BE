import cluster from 'cluster';
import os from 'os';

import compression from 'compression';
import redisClient from './config/redis-config';
import logger from './config/logger';
import multer from 'multer';
// import ProductServiceTest from "./src/test/product.test";
import express from 'express';
import connectDB from './config/mongoDb.config';
import { Request, Response, NextFunction, Application } from 'express';
import FacebookRoutes from './routes/facebook.routes';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger/swaggerConfig';

const numCPUs = os.cpus().length;

const numsWorker = Math.min(4, numCPUs);
// if (cluster.isMaster) {
//   console.log(`Master ${process.pid} is running`);
//   process.title = 'Master Process';

//   const restartLimits: { [key: number]: number[] } = {}; // Theo dõi số lần restart trong khoảng thời gian
//   const RESTART_THRESHOLD = 5; // Giới hạn số lần restart
//   const TIME_FRAME = 60 * 1000; // 60 giây

//   for (let i = 0; i < numsWorker; i++) {
//     cluster.fork();
//   }

//   cluster.on('exit', (worker, code, signal) => {
//     console.log(
//       `Worker ${worker.process.pid} died (code: ${code}, signal: ${signal})`,
//     );

//     const workerId = worker.id;
//     if (!restartLimits[workerId]) {
//       restartLimits[workerId] = [];
//     }
//     // console.log("restartLimits>???", restartLimits);
//     const now = Date.now();
//     restartLimits[workerId] = restartLimits[workerId].filter(
//       (timestamp) => now - timestamp < TIME_FRAME,
//     );
//     // console.log(restartLimits[workerId]);
//     restartLimits[workerId].push(now);

//     if (restartLimits[workerId].length > RESTART_THRESHOLD) {
//       console.error(
//         `Worker ${worker.process.pid} restarted too many times, stopping auto-restart.`,
//       );
//       return;
//     }

//     setTimeout(() => {
//       const newWorker = cluster.fork();
//       console.log(`New worker ${newWorker.process.pid} started`);
//     }, 3000); // Delay 3s trước khi restart
//   });
// } else {
const app: Application = express();
connectDB();
app.use(express.json());
const upload = multer({ dest: 'uploads/' });

app.use(
  compression({
    threshold: 1024,
    filter: (req, res) => {
      console.log('Compression check for:', req.url);
      return compression.filter(req, res);
    },
  }),
);
// redisClient.on("ready", async () => {
//   console.log("Redis is ready!");

//   try {
//     // 👉 Đăng ký subscriber TRƯỚC
//     from"./src/test/inventory.test");
//     // 👉 Sau đó mới publish message
//     await ProductServiceTest.purchaseProduct("product:001", 10);
//   } catch (err) {
//     console.error("Error during test:", err);
//   } finally {
//     // Delay một chút để Redis có thời gian gửi/nhận message
//     setTimeout(() => {
//       redisClient.quit();
//     }, 300);
//   }
// });

// redisClient.on("error", (err) => {
//   console.error("Redis connection failed:", err);
// });

// logger.error("An error occurred");

app.use('/api/v1/', FacebookRoutes);
app.get('/', (req: Request, res: Response): void => {
  console.log(`Worker ${process.pid} is processing request`);
  res.send(`Worker ${process.pid} is handling this request`);
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(4000, () => console.log(`Worker ${process.pid} started`));
// }
