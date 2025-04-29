import express from 'express';
const router = express.Router();
import TokenController from '../controllers/token.controller';

/**
 * @swagger
 * /api/v1/login:
 *  post:
 *      summary: Tạo token mới
 *      tags: [Token]
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
 *                              example: "admin@gmail.com"
 *                          password:
 *                              type: string
 *                              example: "123123"
 *      responses:
 *          201:
 *              description: Success
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                type: string
 *                                example: 5be360f9-b7fb-48c9-b832-003ee637096d
 *                              user_id:
 *                                type: string
 *                                example: 3cc9aaa2-a3f3-4dba-b64e-1c6109dac486
 *                              user_token:
 *                                type: array
 *                                example: []
 *                              access_token:
 *                                type: string
 *                                example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzMTIzIiwiaWF0IjoxNzQ1ODE4MDI3LCJleHAiOjE3NDU4MTgwODd9.cfGQAcln43SW0SSWAyZWvo87sHnPzEB1pNd9yEL9D8I
 *                              refresh_token:
 *                                type: string
 *                                example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzMTIzIiwiaWF0IjoxNzQ1ODE4MDI3LCJleHAiOjE3NDU4MTgyMDd9.7AZVNAWO1mhMq4JCR8S3SAqD4IVqHPwOvdtrz5dVraA
 *                              created_at:
 *                                type: string
 *                                example: 2025-04-28T03:55:07.017Z
 *                              updated_at:
 *                                type: string
 *                                example: 2025-04-28T03:55:07.017Z
 *                              user:
 *                                type: object
 *                                properties:
 *                                  id:
 *                                      type: string
 *                                      example: 3cc9aaa2-a3f3-4dba-b64e-1c6109dac486
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
router.post('/login', TokenController.createAccessToken);

/**
 * @swagger
 * /api/v1/refresh-token:
 *  post:
 *      summary: Tạo refresh token
 *      tags: [Token]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - refresh_token
 *                          - email
 *                          - password
 *                      properties:
 *                          refresh_token:
 *                              type: string
 *                              example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzMTIzIiwiaWF0IjoxNzQ1ODI2NDc2LCJleHAiOjE3NDU4MjY2NTZ9.MilxSuY_D22mKdyA-kX92Q-NqvFELUAlPkGOWOF93jA
 *                          email:
 *                              type: string
 *                              example: "admin@gmail.com"
 *                          password:
 *                              type: string
 *                              example: "123123"
 *      responses:
 *          201:
 *              description: Cập nhật access token thành công
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                type: string
 *                                example: 5be360f9-b7fb-48c9-b832-003ee637096d
 *                              user_id:
 *                                type: string
 *                                example: 3cc9aaa2-a3f3-4dba-b64e-1c6109dac486
 *                              user_token:
 *                                type: array
 *                                example: []
 *                              access_token:
 *                                type: string
 *                                example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzMTIzIiwiaWF0IjoxNzQ1ODE4MDI3LCJleHAiOjE3NDU4MTgwODd9.cfGQAcln43SW0SSWAyZWvo87sHnPzEB1pNd9yEL9D8I
 *                              refresh_token:
 *                                type: string
 *                                example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzMTIzIiwiaWF0IjoxNzQ1ODE4MDI3LCJleHAiOjE3NDU4MTgyMDd9.7AZVNAWO1mhMq4JCR8S3SAqD4IVqHPwOvdtrz5dVraA
 *                              created_at:
 *                                type: string
 *                                example: 2025-04-28T03:55:07.017Z
 *                              updated_at:
 *                                type: string
 *                                example: 2025-04-28T03:55:07.017Z
 *                              user:
 *                                type: object
 *                                properties:
 *                                  id:
 *                                      type: string
 *                                      example: 3cc9aaa2-a3f3-4dba-b64e-1c6109dac486
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
router.post('/refresh-token', TokenController.updateAccessToken);

export default router;
