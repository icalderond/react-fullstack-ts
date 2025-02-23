import { Router } from "express";
import { getUsers, createUser, updateUser, deleteUser } from "../controllers/user.controller";

const userRouter = Router();
userRouter.get('/', getUsers);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;