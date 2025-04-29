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
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import cors from 'cors';
import RolesRoutes from './routes/roles.routes';
import UserRoutes from './routes/user.routes';
import TokenRoutes from './routes/token.route';
import FacebookFanPageRoutes from './routes/facebookFanpage.route';
import FacebookConnection from './routes/facebookConnection.route';
import FacebookPageInsight from './routes/facebookPageInsight.route';
import Document from './models/document.model';
import OpenAI from 'openai';

dotenv.config({ path: `${__dirname}/../.env` });
const envPath = `${__dirname}/../.env`;

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
app.use(cors());
const upload = multer({ dest: 'uploads/' });
const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'],
});

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
async function getEmbedding(text: string) {
  console.log('Getting embedding for text:', text);
  console.log(process.env.OPENAI_API_KEY);
  const res = await openai.embeddings.create({
    input: text,
    model: 'text-embedding-3-small',
    encoding_format: 'float',
  });

  const embedding = res.data[0].embedding;
  console.log('Embedding length:', embedding.length); // Kiểm tra kích thước
  return embedding;
}

app.post('/add-document', async (req, res) => {
  try {
    const { content } = req.body;
    const embedding = await getEmbedding(content);
    const doc = new Document({ content, embedding });
    await doc.save();
    res.status(200).json({ message: 'Document saved', doc });
  } catch (error) {
    console.error('Error adding document:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.post('/ask', async (req, res) => {
  const { question } = req.body;
  const indexes = await Document.collection.getIndexes();
  console.log('Indexes on Document collection:', indexes);
  const embedding = await getEmbedding(question);
  console.log('Embedding for question:', embedding);
  const results = await Document.aggregate([
    {
      $vectorSearch: {
        index: 'vector_index', // Tên index bạn đã tạo
        path: 'embedding',
        queryVector: embedding,
        numCandidates: 30,
        limit: 3,
      },
    },
    {
      $project: {
        content: 1,
        score: { $meta: 'vectorSearchScore' },
      },
    },
  ]);
  console.log(results);
  if (results.length > 0) {
    const chatGptResponse = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            'Tóm tắt các câu sau thành một câu trả lời ngắn gọn. Chỉ bám sát các câu dưới đây, không bịa',
        },
        {
          role: 'user',
          content: results.map((result) => result.content).join(' '),
        },
      ],
      max_tokens: 150,
    });
    res.json({
      answer: 'success',
      data: chatGptResponse.choices[0].message.content,
    });
  } else {
    res.json({ answer: 'Không tìm thấy câu trả lời từ cơ sở dữ liệu.' });
  }
});

app.use('/api/v1/', FacebookConnection);
app.use('/api/v1/', FacebookPageInsight);
app.use('/api/v1/', FacebookFanPageRoutes);
app.use('/api/v1/', UserRoutes);
app.use('/api/v1/', TokenRoutes);
app.use('/api/v1/', FacebookRoutes);
app.use('/api/v1/', RolesRoutes);
app.get('/', (req: Request, res: Response): void => {
  console.log(`Worker ${process.pid} is processing request`);
  res.send(`Worker ${process.pid} is handling this request`);
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(4000, () => console.log(`Worker ${process.pid} started`));
// }
