import { Router } from "express";

import { register, login } from "../controllers/user.controller";

export const userRouter = Router();

// Register a new user
userRouter.post("/register", register);

// Login a user
userRouter.post("/login", login);