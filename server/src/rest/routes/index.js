import express from "express";
const router = express.Router();
import baseRouter from "./baseRouter";
import userRouter from "./userRouter";
import loginRouter from "./loginRouter";

router.use(baseRouter);
router.use("/user/register", userRouter);
router.use(loginRouter);
export default router;
