import { HydratedDocument, Model } from "mongoose";

export interface IUser {
  id: string;
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  password: string;
  role: "student";
  dateOfBirth?: string;
  gender: "male" | "female" | "other";
  contactNo: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    zip: string;
  };
}

export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}

export interface IUserMethods {
  fullNmae(): string;
}
