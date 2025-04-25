import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { Strategy as FacebookStrategy } from 'passport-facebook';

const router = express.Router();

// Cấu hình Facebook Strategy chỉ 1 lần duy nhất
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID!,
      clientSecret: process.env.FACEBOOK_APP_SECRET!,
      callbackURL: 'http://localhost:4000/auth/facebook/callback',
      profileFields: ['displayName', 'photos', 'email'],
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    },
  ),
);

// Middleware xác thực JWT
const authenticateJWT = (req: any, res: any, next: any) => {
  const authHeader = req.headers.authorization;
  const jwtSecret = process.env.JWT_SECRET as string;

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
router.get(
  '/auth/facebook',
  passport.authenticate('facebook', { scope: ['email'] }),
);

// Route callback
router.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', {
    session: false,
    failureRedirect: '/',
  }),
  (req: any, res) => {
    const user = {
      id: req.user.id,
      name: req.user.displayName,
      email: req.user.emails?.[0]?.value || null,
      picture: req.user.photos?.[0]?.value || null,
    };

    const token = jwt.sign(user, process.env.JWT_SECRET!, { expiresIn: '1d' });
    res.json({ token });
  },
);

// Route được bảo vệ
router.get('/api/user', authenticateJWT, (req, res) => {
  res.json(req.user);
});

router.get('/api/verify-token', authenticateJWT, (req, res) => {
  res.json({ valid: true, user: req.user });
});

export default router;
