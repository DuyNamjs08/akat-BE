import express from 'express';
const router = express.Router();
import { authenToken } from '../middlewares/auth.middleware';
import FacebookScheduleController from '../controllers/facebookSchedule.controller';
import { uploadMiddleware } from '../middlewares/upload.middleware';

router.post(
  '/facebook-schedule',
  uploadMiddleware.array('files', 10),
  FacebookScheduleController.createFacebookSchedule,
);
router.get(
  '/facebook-schedule',
  //   authenToken,
  FacebookScheduleController.getAllFacebookSchedules,
);
router.get(
  '/facebook-schedule/:id',
  FacebookScheduleController.getFacebookScheduleById,
);
router.put(
  '/facebook-schedule/:id',
  FacebookScheduleController.updateFacebookSchedule,
);
router.delete(
  '/facebook-schedule/:id',
  //   authenToken,
  FacebookScheduleController.deleteFacebookSchedule,
);
export default router;
