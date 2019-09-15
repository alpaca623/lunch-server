import express from "express";
import route from "../route";

const home = express.Router();

home.get(route.home, (req, res) => res.send('home'));

export default home;