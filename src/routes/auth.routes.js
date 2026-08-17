import { Router } from "express";

const authRouter = Router();

// route POST /api/auth/register
// description register a new user
// access public

authRouter.post("/register")

export default authRouter;
