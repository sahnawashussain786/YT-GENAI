import { Router } from "express";
import authController from "../controllers/auth.controller";

const authRouter = Router();

// route POST /api/auth/register
// description register a new user
// access public

authRouter.post("/register", authController.registerUserController)

export default authRouter;
