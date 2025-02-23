import { Request, Response } from "express";
import User from "../models/user";

export const getUsers = async (req:Request, res:Response) => {
    const users = await User.findAll();
    res.json(users);
}

export const createUser = async (req:Request, res:Response) => {
    const user = req.body;
    const newUser = await User.create(user);
    res.json(newUser);
}

export const updateUser = async (req:Request, res:Response) => {
    const id = req.params.id;
    const user = req.body;
    await User.update(user, { where: { id } });
    res.json({ message: 'User updated' });
}

export const deleteUser = async (req:Request, res:Response) => {
    const id = req.params.id;
    await User.destroy({ where: { id } });
    res.json({ message: 'User deleted' });
}