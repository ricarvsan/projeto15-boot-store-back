import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { loginSchema, registerSchema } from "../schemas/user.schemas.js";
import { getUsers } from "../controllers/user.controller.js";
import { validateAuth } from "../middlewares/validateAuth.js";

const userRouter = Router();

userRouter.get('/', getUsers);

export default userRouter;