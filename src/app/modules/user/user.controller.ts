import { Request, Response, NextFunction } from "express";
import {
  createUserToDB,
  getAdminUserByDB,
  getUserByIdFromDB,
  getUsersFromDB,
} from "./user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const user = await createUserToDB(data);
  res.status(200).json({
    message: "User created successfully",
    data: user,
  });
};

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await getUsersFromDB();

  console.log(users);
  res.status(200).json({
    message: "Users fetched successfully",
    data: users,
  });
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const users = await getUserByIdFromDB(id);

  console.log(users);
  res.status(200).json({
    message: "Users fetched successfully",
    data: users,
  });
};

export const getAdminUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await getAdminUserByDB();

  console.log(users);
  res.status(200).json({
    message: "Users fetched successfully",
    data: users,
  });
};
