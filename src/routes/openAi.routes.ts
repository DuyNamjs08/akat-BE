import express from 'express';
const router = express.Router();
import openAiController from '../controllers/openai.controller';
import configContentModerationController, {
  hypotheticalViolationReason,
} from '../controllers/ModerationSetting.controller';
import { createMailsController } from '../controllers/mails.controller';

router.post('/process-post', openAiController.processPost);
router.post('/check-ai', hypotheticalViolationReason);
router.post('/send-mail', createMailsController);
router.post(
  '/config-moderation',
  configContentModerationController.configContentModeration,
);
router.get('/config-moderation', configContentModerationController.config);

export default router;
