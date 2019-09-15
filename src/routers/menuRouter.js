import express from "express";
import route from "../route";
import { MenuList, MenuInsert } from "../controllers/menuController";

const menuRouter = express.Router();

menuRouter.get(route.type_list, MenuList);
menuRouter.post(route.type_insert, MenuInsert);

export default menuRouter;
