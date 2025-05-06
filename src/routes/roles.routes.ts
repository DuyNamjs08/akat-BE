import express from 'express';
const router = express.Router();
import roleController from '../controllers/role.controller';
import { authenToken } from '../middlewares/auth.middleware';

/**
 * @swagger
 * /api/v1/role:
 *  post:
 *      summary: Tạo một role mới cho user
 *      tags: [Role]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - name
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: "admin"
 *      responses:
 *          201:
 *              description: Tạo quyền thành công
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: string
 *                                  example: 8b5237e2-8b75-4882-908a-86353fc555bd
 *                              name:
 *                                  type: string
 *                                  example: user
 *                              created_at:
 *                                  type: string
 *                                  example: 2025-04-28T05:34:49.485Z
 *                              updated_at:
 *                                  type: string
 *                                  example: 2025-04-28T05:34:49.485Z
 */
router.post('/role', roleController.createRole);

/**
 * @swagger
 * /api/v1/role:
 *  get:
 *      summary: Lấy danh sách tất cả roles
 *      tags: [Role]
 *      responses:
 *          200:
 *              description: Lấy danh sách role thành công
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                  id:
 *                                      type: string
 *                                      example: 8b5237e2-8b75-4882-908a-86353fc555bd
 *                                  name:
 *                                      type: string
 *                                      example: admin
 *                                  created_at:
 *                                      type: string
 *                                      example: 2025-04-28T05:34:49.485Z
 *                                  updated_ at:
 *                                      type: string
 *                                      example: 2025-04-28T05:34:49.485Z
 */
router.get('/role', roleController.getAllRoles);

/**
 * @swagger
 * /api/v1/role/{id}:
 *  get:
 *      summary: Lấy chi tiết role theo id
 *      tags: [Role]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: ID của role
 *      responses:
 *          200:
 *              description: Lấy role thành công
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: string
 *                                  example: 8b5237e2-8b75-4882-908a-86353fc555bd
 *                              name:
 *                                  type: string
 *                                  example: admin
 *                              created_at:
 *                                  type: string
 *                                  example: 2025-04-28T05:34:49.485Z
 *                              updated_ at:
 *                                  type: string
 *                                  example: 2025-04-28T05:34:49.485Z
 */
router.get('/role/:id', roleController.getRoleById);

/**
 * @swagger
 * /api/v1/role/{id}:
 *  put:
 *      summary: Cập nhật role theo id
 *      tags: [Role]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: ID của role
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *      responses:
 *          200:
 *              description: Cập nhật role thành công
 */
router.put('/role/:id', roleController.updateRole);

/**
 * @swagger
 * /api/v1/role/{id}:
 *  delete:
 *      summary: Xóa role theo id
 *      tags: [Role]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: ID của role
 *      responses:
 *          200:
 *              description: Xóa quyền thành công !
 */
router.delete('/role/:id', authenToken, roleController.deleteRole);
export default router;
