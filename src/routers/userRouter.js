import express from "express";
import route from "../route";
import { userInsert } from "../controllers/userController";

const user = express.Router();

user.get(route.user, (req, res) => res.send("user request"));
user.post(route.user_create, userInsert);

export default user;
