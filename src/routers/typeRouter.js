import express from "express";
import route from "../route";
import { TypeList, TypeInsert } from "../controllers/typeController";

const typeRouter = express.Router();

typeRouter.get(route.type_list, TypeList);
typeRouter.post(route.type_insert, TypeInsert);

export default typeRouter;
