import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import morgan from "morgan";
import route from "./route";
import cors from "cors";
import * as http from 'http';

import homeRouter from "./routers/homeRouter";
import menuRouter from "./routers/menuRouter";
import loginRouter from "./routers/loginRouter";
import userRouter from "./routers/userRouter";
import typeRouter from "./routers/typeRouter";
import orderRouter from "./routers/orderRouter";
import config from "./config";

const app = express();

export default class App {
  constructor() {
    app.use(helmet());
    app.use(morgan("dev"));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());

    app.use(route.user, userRouter);
    app.use(route.order, orderRouter);
    app.use(route.type, typeRouter);
    app.use(route.menu, menuRouter);
    app.use(route.login, loginRouter);
    app.use(route.home, homeRouter);
  }
  listen(port = config.PORT) {
    const welcome = p => () => console.log(port);
    http.createServer(app).listen(port, welcome);
    return app;
  }
}
