import express from 'express';
const router = express.Router();
import TokenController from '../controllers/token.controller';

router.post('/login', TokenController.createAccessToken);
router.post('/refresh-token', TokenController.updateAccessToken);

export default router;
