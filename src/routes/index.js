import userRouter from "./userRoute.js";

export default (app) => {
    app.use('/user', userRouter);
};