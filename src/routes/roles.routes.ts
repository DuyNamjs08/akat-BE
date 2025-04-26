import express from 'express';
const router = express.Router();
import roleController from '../controllers/role.controller';
import { authenToken } from '../middlewares/auth.middleware';

router.post('/role', roleController.createRole);
router.get('/role', authenToken, roleController.getAllRoles);
router.get('/role/:id', roleController.getRoleById);
router.put('/role/:id', roleController.updateRole);
router.delete('/role/:id', authenToken, roleController.deleteRole);
export default router;
