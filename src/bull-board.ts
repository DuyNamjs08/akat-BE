import { createBullBoard } from 'bull-board';
import { BullAdapter } from 'bull-board/bullAdapter';
import express from 'express';
import dotenv from 'dotenv';
import { facebookQueue } from './workers/facebook.worker';
dotenv.config({ path: `${__dirname}/../.env` });

const server = express();
const { router } = createBullBoard([new BullAdapter(facebookQueue)]);

server.use('/admin/queues', router);
server.listen(4001, () => console.log('Bull Board running'));
