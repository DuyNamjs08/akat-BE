import cluster from 'cluster';
import os from 'os';

import compression from 'compression';
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
import uploadtestRoutes from './routes/test.routes';
import resourcesRoutes from './routes/resources.routes';
import FacebookPostRoutes from './routes/facebookPost.route';
import FacebookSchedualRoutes from './routes/facebookSchedual.route';
import OpenaiRoutes from './routes/openAi.routes';
import NotiRoutes from './routes/noti.routes';
import Document from './models/document.model';
import OpenAI from 'openai';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import redisClient from './config/redis-config';
import './workers/facebook.worker';
import './workers/facebook-repeate.worker';
import prisma from './config/prisma';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import facebookPostModel from './models/FacebookPost.model';
import { fbFixPost } from './workers/fb-fixpost.worker';

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
const server = createServer(app);
connectDB();
app.use(
  cors({
    origin: '*',
  }),
);
app.use(express.json());
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
  adapter: createAdapter(redisClient, redisClient.duplicate()),
});
export function getIO() {
  if (!io) {
    throw new Error('Socket.io not initialized!');
  }
  return io;
}
const upload = multer({ dest: 'uploads/' });
const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'],
});

app.use(
  compression({
    threshold: 1024,
    filter: (req, res) => {
      // console.log('Compression check for:', req.url);
      return compression.filter(req, res);
    },
  }),
);

(async () => {
  try {
    await redisClient.set('test_key', 'hello');
    const value = await redisClient.get('test_key');
    console.log('Redis test value:', value);
  } catch (err) {
    console.error('Redis operation failed:', err);
  }
})();
async function getEmbedding(text: string) {
  const res = await openai.embeddings.create({
    input: text,
    model: 'text-embedding-3-small',
    encoding_format: 'float',
  });
  const embedding = res.data[0].embedding;
  return embedding;
}

async function readJsonFiles(file1: string, file2: string) {
  const baseDir = path.join(__dirname, '..', 'tranning'); // đi ra khỏi src, vào tranning
  const [data1, data2] = await Promise.all([
    readFile(path.join(baseDir, file1), 'utf8'),
    readFile(path.join(baseDir, file2), 'utf8'),
  ]);
  return [JSON.parse(data1), JSON.parse(data2)];
}
function combineJsonData(json1: any, json2: any) {
  return [...json1, ...json2];
}

function formatForOpenAIFineTuning(data: any[]) {
  return data.map((item: any) => {
    const text = item.text?.trim() || '';
    const name = item.user?.name || 'Người dùng';
    const time = item.time || 'không rõ ngày';

    return {
      prompt: `Phân tích bài viết sau:\nNgười đăng: ${name}\nThời gian: ${time}\nNội dung: ${text}\n\nHãy xác định chủ đề và viết tóm tắt ngắn gọn.`,
      completion: 'Chủ đề: [điền chủ đề]\nTóm tắt: [điền nội dung tóm tắt]', // bạn cần tự gán hoặc dùng GPT hỗ trợ tạo trước fine-tune
    };
  });
}

async function saveToJsonl(data: any, outputPath: any) {
  const jsonlContent = data.map((item: any) => JSON.stringify(item)).join('\n');
  await writeFile(outputPath, jsonlContent, 'utf8');
}
app.post('/add-fine-turning', async (req, res) => {
  try {
    const [json1, json2] = await readJsonFiles('file1.json', 'file2.json');
    console.log(json2);
    const combinedData = combineJsonData(json1, json2);
    const formattedData = formatForOpenAIFineTuning(combinedData);
    await saveToJsonl(
      formattedData,
      path.join(__dirname, '..', 'tranning', 'output.jsonl'),
    );
    const outputPath = path.join(__dirname, '..', 'training', 'output.jsonl');
    res.status(200).json({ message: 'Document saved and fine-tuning started' });
  } catch (error) {
    console.error('Error adding document:', error);
    res.status(500).send('Internal Server Error');
  }
});
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

app.use('/api/v1/', OpenaiRoutes);
app.use('/api/v1/', NotiRoutes);
app.use('/api/v1/', FacebookSchedualRoutes);
app.use('/api/v1/', FacebookPostRoutes);
app.use('/api/v1/', resourcesRoutes);
app.use('/api/v1/', uploadtestRoutes);
app.use('/api/v1/', FacebookConnection);
app.use('/api/v1/', FacebookPageInsight);
app.use('/api/v1/', FacebookFanPageRoutes);
app.use('/api/v1/', UserRoutes);
app.use('/api/v1/', TokenRoutes);
app.use('/api/v1/', FacebookRoutes);
app.use('/api/v1/', RolesRoutes);
// Endpoint để xác thực webhook (Facebook yêu cầu)
app.get('/facebook-webhook', (req, res) => {
  console.log('Webhook GET request headers:', req.headers);
  const VERIFY_TOKEN = 'facebook12345token';
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];
  console.log(mode, token, challenge);
  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('Webhook verified');
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});
// Endpoint nhận webhook từ Facebook (khi có sự kiện mới)
app.post('/facebook-webhook', async (req, res) => {
  try {
    const entries = req.body.entry;
    for (const entry of entries) {
      if (entry.changes) {
        for (const change of entry.changes) {
          if (
            change.field === 'feed' &&
            ['status', 'photo', 'share', 'video'].includes(change.value.item) &&
            change.value.verb === 'add'
          ) {
            const {
              message, // Nội dung bài viết
              post_id, // ID bài viết
              created_time, // Thời gian đăng bài
              photos,
              link,
            } = change.value;
            console.log(
              'Received webhook payload:',
              JSON.stringify(req.body, null, 2),
            );
            const response = await prisma.facebookFanPage.findFirst({
              where: {
                id: entry.id,
              },
            });
            if (response && response?.id) {
              fbFixPost.add(
                {
                  facebook_post_id: post_id,
                  message,
                  facebook_fanpage_id: entry.id,
                  created_time,
                  link,
                  photos,
                  page_name: response?.page_name,
                  page_category: response?.page_category,
                },
                {
                  attempts: 3, // Thử lại nếu lỗi
                  removeOnComplete: true,
                  removeOnFail: true,
                },
              );
              // await facebookPostModel.updateOne(
              //   {
              //     facebook_post_id: post_id,
              //   },
              //   {
              //     $set: {
              //       content: message || '',
              //       facebook_fanpage_id: entry.id,
              //       posted_at: new Date(created_time * 1000),
              //       likes: 0,
              //       comments: 0,
              //       shares: 0,
              //       status: 'published',
              //       post_avatar_url: link
              //         ? link
              //         : photos
              //           ? JSON.stringify(photos)
              //           : '',
              //       schedule: false,
              //       page_name: response?.page_name || ' ',
              //       page_category: response?.page_category || '',
              //     },
              //   },
              //   { upsert: true },
              // );
            }
          } else {
            // if (entry.id === '659360963920940') {
            //   console.log(
            //     'Received webhook payload: V2',
            //     JSON.stringify(req.body, null, 2),
            //   );
            // }
            // const { post_id, parent_id, verb, message, reaction_type, item } =
            //   change.value;
            // if (
            //   post_id === parent_id &&
            //   (verb === 'add' || verb === 'remove') &&
            //   reaction_type === 'like'
            // ) {
            //   fbRealtimeUpdate.add(
            //     {
            //       post_id,
            //       parent_id,
            //       verb,
            //       message,
            //       reaction_type,
            //       item,
            //     },
            //     {
            //       removeOnComplete: true,
            //       removeOnFail: true,
            //     },
            //   );
            // }
            // if (
            //   post_id === parent_id &&
            //   (verb === 'add' || verb === 'remove') &&
            //   item === 'comment'
            // ) {
            //   fbRealtimeUpdate.add(
            //     {
            //       post_id,
            //       parent_id,
            //       verb,
            //       message,
            //       reaction_type,
            //       item,
            //     },
            //     {
            //       removeOnComplete: true,
            //       removeOnFail: true,
            //     },
            //   );
            // }
          }
        }
      }
    }
    res.status(200).send('ok');
  } catch (err) {
    console.error('Webhook processing error:', err);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/', (req: Request, res: Response): void => {
  console.log(`Worker ${process.pid} is processing request`);
  res.send(`Worker ${process.pid} is handling this request`);
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

io.on('connection', (socket) => {
  console.log(`Client mới kết nối: ${socket.id}`);
  // Xử lý ngắt kết nối
  socket.on('disconnect', () => {
    console.log(`Client ngắt kết nối: ${socket.id}`);
  });
  socket.on('joinRoom', ({ userId, data }) => {
    socket.join(userId);
    console.log({
      userId,
      data,
    });
    console.log(`Socket ${socket.id} joined room ${userId}`);
  });
  socket.on('message', (data) => {
    console.log('Tin nhắn nhận được:', data);
    // Phát tin nhắn đến tất cả client kết nối
    io.emit('message', data);
  });
});
server.listen(4000, () => console.log(`Worker ${process.pid} started`));
// }
