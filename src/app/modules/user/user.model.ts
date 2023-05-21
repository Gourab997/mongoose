import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";
import e from "express";

// type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  id: { type: String, required: true, unique: true },
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: "student" },
  dateOfBirth: { type: String, required: false },
  gender: { type: String, required: true, emun: ["male", "female", "other"] },
  contactNo: { type: String, required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: false },
    country: { type: String, required: true },
    zip: { type: String, required: true },
  },
});

userSchema.static("getAdminUsers", async function getAdminUsers() {
  const admins = await this.find({ role: "admin" });
  return admins;
});

userSchema.method("fullNmae", function (this: IUser) {
  return `${this.name.firstName} ${this.name.lastName}`;
});

const User = model<IUser, UserModel>("User", userSchema);

export default User;
