import express from 'express';
const router = express.Router();
import { authenToken } from '../middlewares/auth.middleware';
import FacebookFanPageController from '../controllers/facebookFanPage.controller';

router.post(
  '/facebook-fan-page',
  FacebookFanPageController.createFacebookFanPage,
);
router.get(
  '/facebook-fan-page',
  //   authenToken,
  FacebookFanPageController.getAllFacebookFanPages,
);
router.get(
  '/facebook-fan-page/:id',
  FacebookFanPageController.getFacebookFanPageById,
);
router.put(
  '/facebook-fan-page/:id',
  FacebookFanPageController.updateFacebookFanPage,
);
router.delete(
  '/facebook-fan-page/:id',
  //   authenToken,
  FacebookFanPageController.deleteFacebookFanPage,
);
export default router;
