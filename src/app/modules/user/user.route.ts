import express from "express";
import {
  createUser,
  getAdminUsers,
  getUserById,
  getUsers,
} from "./user.controller";
const router = express.Router();

router.get("/", getUsers);
router.get("/admin", getAdminUsers);
router.post("/create-user", createUser);
router.get("/user/:id", getUserById);

export default router;
