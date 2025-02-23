import { Request, Response } from "express";
import User from "../models/user";

export const getUsers = async (req:Request, res:Response) => {
    const users = await User.findAll();
    res.json(users);
}