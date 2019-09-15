import express from "express";
import route from "../route";
import { OrderList, OrderInsert } from "../controllers/orderController";

const orderRouter = express.Router();

orderRouter.get(route.order_list, OrderList);
orderRouter.post(route.order_insert, OrderInsert);

export default orderRouter;
