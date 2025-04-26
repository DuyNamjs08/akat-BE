import express from 'express';
const router = express.Router();
import userController from '../controllers/user.controller';

router.post('/user', userController.createUser);
router.get('/user', userController.getAllUsers);
router.get('/user/:id', userController.getUserById);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);
export default router;
