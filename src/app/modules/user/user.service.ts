import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = await new User(payload);

  user.fullNmae();
  await user.save();

  return user;
};

export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne(
    { id: payload },
    {
      name: 1, //filed filter
    }
  );
  return user;
};

export const getAdminUserByDB = async () => {
  const admins = await User.getAdminUsers();
  return admins;
};
