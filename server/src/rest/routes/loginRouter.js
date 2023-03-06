import express from "express";
import { loginController } from "../controllers";
const loginRouter = express.Router();

loginRouter.post("/api/auth", loginController.post);

export default loginRouter;
