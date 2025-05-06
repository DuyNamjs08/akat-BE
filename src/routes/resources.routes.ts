import express from 'express';
const router = express.Router();
import ResourcesController from '../controllers/resources.controller';

router.post('/resources', ResourcesController.createAndUpdateResource);

export default router;
