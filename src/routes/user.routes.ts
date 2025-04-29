import express from 'express';
import userController from '../controllers/user.controller';

const router = express.Router();

/**
 * @swagger
 * /api/v1/user:
 *  post:
 *      summary: Tạo một user mới
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - email
 *                          - password
 *                      properties:
 *                          email:
 *                              type: string
 *                              format: email
 *                              example: admin@gmail.com
 *                          password:
 *                              type: string
 *                              example: 123123
 *                          role_id:
 *                              type: string
 *                              example: 8b5237e2-8b75-4882-908a-86353fc555bd
 *      responses:
 *          201:
 *              description: Tạo người dùng thành công
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: string
 *                                  example: 105bdd8b-b785-4058-baf9-1035373ab794
 *                              instance_id:
 *                                  type: string
 *                                  example: null
 *                              aud:
 *                                  type: string
 *                                  example: null
 *                              email:
 *                                  type: string
 *                                  example: user1@gmail.com
 *                              password:
 *                                  type: string
 *                                  example: $2b$10$VkOJqyHI9FQ9ukCNcDeS1OG3FzHNGp9MSUB4tcoH7h9ZxY.jG0riq
 *                              email_confirmed_at:
 *                                  type: string
 *                                  example: null
 *                              invited_at:
 *                                 type: string
 *                                 example: null
 *                              confirmation_token:
 *                                 type: string
 *                                 example: null
 *                              confirmation_sent_at:
 *                                 type: string
 *                                 example: null
 *                              recovery_token:
 *                                 type: string
 *                                 example: null
 *                              recovery_sent_at:
 *                                 type: string
 *                                 example: null
 *                              email_change_token_new:
 *                                 type: string
 *                                 example: null
 *                              email_change:
 *                                 type: string
 *                                 example: null
 *                              email_change_sent_at:
 *                                 type: string
 *                                 example: null
 *                              last_sign_in_at:
 *                                 type: string
 *                                 example: null
 *                              raw_app_meta_data:
 *                                 type: string
 *                                 example: null
 *                              raw_user_meta_data:
 *                                 type: string
 *                                 example: null
 *                              is_super_admin:
 *                                 type: string
 *                                 example: null
 *                              created_at:
 *                                 type: string
 *                                 example: 2025-04-28T06:40:36.279Z
 *                              updated_at:
 *                                 type: string
 *                                 example: 2025-04-28T06:40:36.279Z
 *                              phone:
 *                                 type: string
 *                                 example: null
 *                              phone_confirmed_at:
 *                                 type: string
 *                                 example: null
 *                              phone_change:
 *                                 type: string
 *                                 example: null
 *                              phone_change_token:
 *                                 type: string
 *                                 example: null
 *                              phone_change_sent_at:
 *                                 type: string
 *                                 example: null
 *                              confirmed_at:
 *                                 type: string
 *                                 example: null
 *                              email_change_token_current:
 *                                 type: string
 *                                 example: null
 *                              email_change_confirm_status:
 *                                 type: string
 *                                 example: null
 *                              banned_until:
 *                                 type: string
 *                                 example: null
 *                              reauthentication_token:
 *                                 type: string
 *                                 example: null
 *                              reauthentication_sent_at:
 *                                 type: string
 *                                 example: null
 *                              is_sso_user:
 *                                 type: boolean
 *                                 example: false
 *                              deleted_at:
 *                                 type: string
 *                                 example: null
 *                              is_anonymous:
 *                                 type: boolean
 *                                 example: false
 *                              role_id:
 *                                 type: string
 *                                 example: 8b5237e2-8b75-4882-908a-86353fc555bd
 */
router.post('/user', userController.createUser);

/**
 * @swagger
 * /api/v1/user:
 *  get:
 *      summary: Lấy danh sách tất cả users
 *      tags: [User]
 *      responses:
 *          200:
 *              description: Danh sách người dùng
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                  id:
 *                                      type: string
 *                                      example: cca68a88-b364-456d-bc4b-687833f1582f
 *                                  instance_id:
 *                                      type: string
 *                                      example: null
 *                                  aud:
 *                                      type: string
 *                                      example: null
 *                                  email:
 *                                      type: string
 *                                      example: user1@gmail.com
 *                                  password:
 *                                      type: string
 *                                      example: $2b$10$VkOJqyHI9FQ9ukCNcDeS1OG3FzHNGp9MSUB4tcoH7h9ZxY.jG0riq
 *                                  email_confirmed_at:
 *                                      type: string
 *                                      example: null
 *                                  invited_at:
 *                                      type: string
 *                                      example: null
 *                                  confirmation_token:
 *                                      type: string
 *                                      example: null
 *                                  confirmation_sent_at:
 *                                      type: string
 *                                      example: null
 *                                  recovery_token:
 *                                      type: string
 *                                      example: null
 *                                  recovery_sent_at:
 *                                      type: string
 *                                      example: null
 *                                  email_change_token_new:
 *                                      type: string
 *                                      example: null
 *                                  email_change:
 *                                      type: string
 *                                      example: null
 *                                  email_change_sent_at:
 *                                      type: string
 *                                      example: null
 *                                  last_sign_in_at:
 *                                      type: string
 *                                      example: null
 *                                  raw_app_meta_data:
 *                                      type: string
 *                                      example: null
 *                                  raw_user_meta_data:
 *                                      type: string
 *                                      example: null
 *                                  is_super_admin:
 *                                      type: string
 *                                      example: null
 *                                  created_at:
 *                                      type: string
 *                                      example: 2025-04-28T06:40:36.279Z
 *                                  updated_at:
 *                                      type: string
 *                                      example: 2025-04-28T06:40:36.279Z
 *                                  phone:
 *                                      type: string
 *                                      example: null
 *                                  phone_confirmed_at:
 *                                      type: string
 *                                      example: null
 *                                  phone_change:
 *                                      type: string
 *                                      example: null
 *                                  phone_change_token:
 *                                      type: string
 *                                      example: null
 *                                  phone_change_sent_at:
 *                                      type: string
 *                                      example: null
 *                                  confirmed_at:
 *                                      type: string
 *                                      example: null
 *                                  email_change_token_current:
 *                                      type: string
 *                                      example: null
 *                                  email_change_confirm_status:
 *                                      type: string
 *                                      example: null
 *                                  banned_until:
 *                                      type: string
 *                                      example: null
 *                                  reauthentication_token:
 *                                      type: string
 *                                      example: null
 *                                  reauthentication_sent_at:
 *                                      type: string
 *                                      example: null
 *                                  is_sso_user:
 *                                      type: boolean
 *                                      example: false
 *                                  deleted_at:
 *                                      type: string
 *                                      example: null
 *                                  is_anonymous:
 *                                      type: boolean
 *                                      example: false
 *                                  role_id:
 *                                      type: string
 *                                      example: 8b5237e2-8b75-4882-908a-86353fc555bd
 */
router.get('/user', userController.getAllUsers);

/**
 * @swagger
 * /api/v1/user/{id}:
 *  get:
 *      summary: Lấy chi tiết user theo id
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: ID của user
 *      responses:
 *          200:
 *              description: Success
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                                  id:
 *                                      type: string
 *                                      example: 8b5237e2-8b75-4882-908a-86353fc555bd
 *                                  instance_id:
 *                                      type: string
 *                                      example: null
 *                                  aud:
 *                                      type: string
 *                                      example: null
 *                                  email:
 *                                      type: string
 *                                      example: user1@gmail.com
 *                                  password:
 *                                      type: string
 *                                      example: $2b$10$VkOJqyHI9FQ9ukCNcDeS1OG3FzHNGp9MSUB4tcoH7h9ZxY.jG0riq
 *                                  email_confirmed_at:
 *                                      type: string
 *                                      example: null
 *                                  invited_at:
 *                                      type: string
 *                                      example: null
 *                                  confirmation_token:
 *                                      type: string
 *                                      example: null
 *                                  confirmation_sent_at:
 *                                      type: string
 *                                      example: null
 *                                  recovery_token:
 *                                      type: string
 *                                      example: null
 *                                  recovery_sent_at:
 *                                      type: string
 *                                      example: null
 *                                  email_change_token_new:
 *                                      type: string
 *                                      example: null
 *                                  email_change:
 *                                      type: string
 *                                      example: null
 *                                  email_change_sent_at:
 *                                      type: string
 *                                      example: null
 *                                  last_sign_in_at:
 *                                      type: string
 *                                      example: null
 *                                  raw_app_meta_data:
 *                                      type: string
 *                                      example: null
 *                                  raw_user_meta_data:
 *                                      type: string
 *                                      example: null
 *                                  is_super_admin:
 *                                      type: string
 *                                      example: null
 *                                  created_at:
 *                                      type: string
 *                                      example: 2025-04-28T06:40:36.279Z
 *                                  updated_at:
 *                                      type: string
 *                                      example: 2025-04-28T06:40:36.279Z
 *                                  phone:
 *                                      type: string
 *                                      example: null
 *                                  phone_confirmed_at:
 *                                      type: string
 *                                      example: null
 *                                  phone_change:
 *                                      type: string
 *                                      example: null
 *                                  phone_change_token:
 *                                      type: string
 *                                      example: null
 *                                  phone_change_sent_at:
 *                                      type: string
 *                                      example: null
 *                                  confirmed_at:
 *                                      type: string
 *                                      example: null
 *                                  email_change_token_current:
 *                                      type: string
 *                                      example: null
 *                                  email_change_confirm_status:
 *                                      type: string
 *                                      example: null
 *                                  banned_until:
 *                                      type: string
 *                                      example: null
 *                                  reauthentication_token:
 *                                      type: string
 *                                      example: null
 *                                  reauthentication_sent_at:
 *                                      type: string
 *                                      example: null
 *                                  is_sso_user:
 *                                      type: boolean
 *                                      example: false
 *                                  deleted_at:
 *                                      type: string
 *                                      example: null
 *                                  is_anonymous:
 *                                      type: boolean
 *                                      example: false
 *                                  role_id:
 *                                      type: string
 *                                      example: 8b5237e2-8b75-4882-908a-86353fc555bd
 */
router.get('/user/:id', userController.getUserById);

/**
 * @swagger
 * /api/v1/user/{id}:
 *  put:
 *      summary: Cập nhật user theo id
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: ID của user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                              example: test@gmail.com
 *      responses:
 *          200:
 *              description: Success
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                                  id:
 *                                      type: string
 *                                      example: 8b5237e2-8b75-4882-908a-86353fc555bd
 *                                  instance_id:
 *                                      type: string
 *                                      example: null
 *                                  aud:
 *                                      type: string
 *                                      example: null
 *                                  email:
 *                                      type: string
 *                                      example: user1@gmail.com
 *                                  password:
 *                                      type: string
 *                                      example: $2b$10$VkOJqyHI9FQ9ukCNcDeS1OG3FzHNGp9MSUB4tcoH7h9ZxY.jG0riq
 *                                  email_confirmed_at:
 *                                      type: string
 *                                      example: null
 *                                  invited_at:
 *                                      type: string
 *                                      example: null
 *                                  confirmation_token:
 *                                      type: string
 *                                      example: null
 *                                  confirmation_sent_at:
 *                                      type: string
 *                                      example: null
 *                                  recovery_token:
 *                                      type: string
 *                                      example: null
 *                                  recovery_sent_at:
 *                                      type: string
 *                                      example: null
 *                                  email_change_token_new:
 *                                      type: string
 *                                      example: null
 *                                  email_change:
 *                                      type: string
 *                                      example: null
 *                                  email_change_sent_at:
 *                                      type: string
 *                                      example: null
 *                                  last_sign_in_at:
 *                                      type: string
 *                                      example: null
 *                                  raw_app_meta_data:
 *                                      type: string
 *                                      example: null
 *                                  raw_user_meta_data:
 *                                      type: string
 *                                      example: null
 *                                  is_super_admin:
 *                                      type: string
 *                                      example: null
 *                                  created_at:
 *                                      type: string
 *                                      example: 2025-04-28T06:40:36.279Z
 *                                  updated_at:
 *                                      type: string
 *                                      example: 2025-04-28T06:40:36.279Z
 *                                  phone:
 *                                      type: string
 *                                      example: null
 *                                  phone_confirmed_at:
 *                                      type: string
 *                                      example: null
 *                                  phone_change:
 *                                      type: string
 *                                      example: null
 *                                  phone_change_token:
 *                                      type: string
 *                                      example: null
 *                                  phone_change_sent_at:
 *                                      type: string
 *                                      example: null
 *                                  confirmed_at:
 *                                      type: string
 *                                      example: null
 *                                  email_change_token_current:
 *                                      type: string
 *                                      example: null
 *                                  email_change_confirm_status:
 *                                      type: string
 *                                      example: null
 *                                  banned_until:
 *                                      type: string
 *                                      example: null
 *                                  reauthentication_token:
 *                                      type: string
 *                                      example: null
 *                                  reauthentication_sent_at:
 *                                      type: string
 *                                      example: null
 *                                  is_sso_user:
 *                                      type: boolean
 *                                      example: false
 *                                  deleted_at:
 *                                      type: string
 *                                      example: null
 *                                  is_anonymous:
 *                                      type: boolean
 *                                      example: false
 *                                  role_id:
 *                                      type: string
 *                                      example: 8b5237e2-8b75-4882-908a-86353fc555bd
 */
router.put('/user/:id', userController.updateUser);

/**
 * @swagger
 * /api/v1/user/{id}:
 *  delete:
 *      summary: Xóa user theo id
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: ID của user
 *      responses:
 *          200:
 *              description: Xóa người dùng thành công !
 */
router.delete('/user/:id', userController.deleteUser);

export default router;
