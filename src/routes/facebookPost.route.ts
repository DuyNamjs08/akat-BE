import express from 'express';
const router = express.Router();
import { authenToken } from '../middlewares/auth.middleware';
import FacebookPostController, {
  createPostFBMongo,
  generatePostFBMongo,
} from '../controllers/facebookPost.controller';

router.post(
  '/facebook-post',
  FacebookPostController.createAndUpdateFacebookPost,
);
router.post('/facebook-post-v2', createPostFBMongo);
router.post('/genpost-openai', generatePostFBMongo);
router.post(
  '/facebook-post-list',
  //   authenToken,
  FacebookPostController.getAllFacebookPosts,
);
router.get('/facebook-post/:id', FacebookPostController.getFacebookPostById);
router.put('/facebook-post/:id', FacebookPostController.updateFacebookPost);
router.delete(
  '/facebook-post/:id',
  //   authenToken,
  FacebookPostController.deleteFacebookPost,
);
export default router;
