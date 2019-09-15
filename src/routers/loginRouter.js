import express from "express";
import route from "../route";
import { userCheck } from "../controllers/loginController";

const login = express.Router();

login.get(route.login, (req, res) => res.send("login view"));
login.post(route.login_check, userCheck);

export default login;
