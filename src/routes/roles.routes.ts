import express from 'express';
const router = express.Router();
import roleController from '../controllers/role.controller';

router.post('/role', roleController.createRole);
router.get('/role', roleController.getAllRoles);
router.get('/role/:id', roleController.getRoleById);
router.put('/role/:id', roleController.updateRole);
router.delete('/role/:id', roleController.deleteRole);
export default router;
