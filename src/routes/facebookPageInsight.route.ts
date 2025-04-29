import express from 'express';
const router = express.Router();
import { authenToken } from '../middlewares/auth.middleware';
import FacebookInsightController from '../controllers/facebookPageInsight.controller';

router.post(
  '/facebook-page-insight',
  FacebookInsightController.createFacebookInsight,
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
export default router;
