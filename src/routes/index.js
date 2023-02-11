import authRouter from "./authRouter.js";

export default (app) => {
    app.use('/auth', authRouter);
};