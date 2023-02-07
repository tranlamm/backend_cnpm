import express from 'express';
import userController from '../controllers/UserController.js';
const userRouter = express.Router();

userRouter.post('/register', userController.register);

export default userRouter;
