import express from 'express';
const router = express.Router();
import NotiController from '../controllers/notifications.controller';

router.get('/noti', NotiController.getAllNoti);
router.post('/noti', NotiController.updateNoti);

export default router;
