import express, { Request, Response } from 'express';
import { errorResponse, successResponse } from '../helpers/response';
import dotenv from 'dotenv';

import passport from 'passport';
import session from 'express-session';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import jwt from 'jsonwebtoken';

dotenv.config();

export const getAllFacebookPosts = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    // const posts = await prisma.facebookPost.findMany();
    successResponse(res, 'get-alll', {});
  } catch (error) {
    // console.error('Error fetching Facebook posts:', error);
    errorResponse(res, 'Internet server error', error, 500);
  }
};

export const createFacebookPost = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    // const newPost = await prisma.facebookPost.create({
    //   data: { content },
    // });
    successResponse(res, 'create-alll', {});
  } catch (error) {
    // console.error('Error creating Facebook post:', error);
    errorResponse(res, 'Internet server error', error, 500);
  }
};

export const loginFacebook = () => {
  const app = express();

  // Middleware cho parsing body và session
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));

  // Cấu hình session (cần thiết cho Passport nhưng sẽ chỉ dùng tạm thời trong quá trình xác thực)
  app.use(
    session({
      secret: process.env.SESSION_SECRET || 'session-secret',
      resave: false,
      saveUninitialized: false,
      // cookie: { secure: process.env.NODE_ENV === 'production' },
    }),
  );

  // Khởi tạo Passport
  app.use(passport.initialize());
  app.use(passport.session());

  // JWT Secret
  const jwtSecret = process.env.JWT_SECRET as string;

  // const FacebookStrategy = require('passport-facebook').Strategy;
  // Cấu hình Facebook Strategy
  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_APP_ID as string,
        clientSecret: process.env.FACEBOOK_APP_SECRET as string,
        callbackURL: 'http://localhost:3000/auth/facebook/callback',
        profileFields: ['displayName', 'photos', 'email'],
      },
      function (
        accessToken: string,
        refreshToken: string,
        profile: passport.Profile,
        done: (error: any, user?: any) => void,
      ) {
        return done(null, profile);
      },
    ),
  );

  // Serialize và deserialize user (cần cho Passport)
  passport.serializeUser((user, done) => done(null, user));
  // @ts-expect-error
  passport.deserializeUser((user, done) => done(null, user));

  // Middleware xác thực JWT
  const authenticateJWT = (req: any, res: any, next: any) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ error: 'Không tìm thấy token' });
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, jwtSecret, (err: any, user: any) => {
      if (err) {
        return res
          .status(403)
          .json({ error: 'Token không hợp lệ hoặc đã hết hạn' });
      }

      req.user = user;
      next();
    });
  };

  // Route đăng nhập Facebook
  app.get(
    '/auth/facebook',
    passport.authenticate('facebook', { scope: ['public_profile, email'] }),
  );

  // Route callback từ Facebook - issue JWT token ở đây
  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/' }),
    (req: any, res: any) => {
      if (!req.isAuthenticated()) {
        return res.redirect('/auth/facebook');
      }

      // Tạo JWT payload từ thông tin profile Facebook
      const user = {
        id: req.user.id,
        name: req.user.displayName,
        email: !req.user.emails ? req.user.emails[0].value : null,
        picture: req.user.photos ? req.user.photos[0].value : null,
      };

      // Tạo JWT token
      // res.redirect(`/success.html?token=${token}`);
      const token = jwt.sign(user, jwtSecret, { expiresIn: '1d' });

      // Trả về success với token
      return res.status(200).json({ token });
    },
  );

  // // Route được bảo vệ bởi JWT
  // app.get('/api/user', authenticateJWT, (req, res) => {
  //   res.json(req.user);
  // });
  //
  // // Route để kiểm tra token
  // app.get('/api/verify-token', authenticateJWT, (req, res) => {
  //   res.json({ valid: true, user: req.user });
  // });
  //
  // // Route homepage
  // app.get('/', (req, res) => {
  //   res.sendFile('index.html', { root: './public' });
  // });

  // const PORT = process.env.PORT || 3000;
  // app.listen(PORT, () => {
  //   console.log(`Server đang chạy tại http://localhost:${PORT}`);
  // });
};
