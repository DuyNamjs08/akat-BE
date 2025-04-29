import express from 'express';
const router = express.Router();
import { authenToken } from '../middlewares/auth.middleware';
import FacebookConnectionController from '../controllers/facebookConnection.controller';

router.post(
  '/facebook-connection',
  FacebookConnectionController.createFacebookConnection,
);
router.get(
  '/facebook-connection',
  //   authenToken,
  FacebookConnectionController.getAllFacebookConnections,
);
router.get(
  '/facebook-connection/:id',
  FacebookConnectionController.getFacebookConnectionById,
);
router.put(
  '/facebook-connection/:id',
  FacebookConnectionController.updateFacebookConnection,
);
router.delete(
  '/facebook-connection/:id',
  //   authenToken,
  FacebookConnectionController.deleteFacebookConnection,
);
export default router;
