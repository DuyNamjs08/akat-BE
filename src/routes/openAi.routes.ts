import express from 'express';
const router = express.Router();
import openAiController from '../controllers/openai.controller';
import configContentModerationController from '../controllers/ModerationSetting.controller';

router.post('/process-post', openAiController.processPost);
router.post(
  '/config-moderation',
  configContentModerationController.configContentModeration,
);
router.get('/config-moderation', configContentModerationController.config);

export default router;
