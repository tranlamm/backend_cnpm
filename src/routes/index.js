import useRouter from "./userRoute.js";

export default (app) => {
    app.use('/user', useRouter);
};