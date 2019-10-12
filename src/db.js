import mongoose from "mongoose";
import config from "./config";

mongoose.connect(process.env.MONGO_URL || config.MONGO_URL, {
  useNewUrlParser: true
});

const db = mongoose.connection;

db.once("open", () => console.log("✅ db open!!"));

db.on("error", () => console.log("✅ db error!!"));
