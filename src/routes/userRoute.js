import express from 'express';
import userController from '../controllers/UserController.js';
import authMiddleware from '../middleware/authMiddleware.js';
const userRouter = express.Router();

userRouter.post('/auth/register', userController.register);
userRouter.post('/auth/login', userController.login);
userRouter.post('/auth/refreshToken', userController.refreshToken);
userRouter.post('/auth/logout', userController.logout);

export default userRouter;
