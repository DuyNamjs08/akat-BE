import express from 'express';
const router = express.Router();
import { authenToken } from '../middlewares/auth.middleware';
import FacebookInsightController from '../controllers/facebookPageInsight.controller';

router.post(
  '/facebook-page-insight',
  FacebookInsightController.createFacebookInsight,
);
router.post(
  '/fb-page-insight-async',
  FacebookInsightController.asyncFacebookInsight,
);
router.post(
  '/fb-page-insight-user-fanpage',
  FacebookInsightController.getFacebookInsightByUseridAndFanpageid,
);
router.get(
  '/facebook-page-insight',
  //   authenToken,
  FacebookInsightController.getAllFacebookInsights,
);
router.get(
  '/facebook-page-insight/:id',
  FacebookInsightController.getFacebookInsightById,
);
router.put(
  '/facebook-page-insight/:id',
  FacebookInsightController.updateFacebookInsight,
);
router.delete(
  '/facebook-page-insight/:id',
  //   authenToken,
  FacebookInsightController.deleteFacebookInsight,
);
router.post(
  '/facebook-page-insight/connection',
  FacebookInsightController.deleteFacebookInsightWithConnection,
);
export default router;
