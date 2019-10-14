import Server from "./server";
import config from "./config";
import mongoose from "mongoose";

const PORT = process.env.PORT || config.PORT;

mongoose.connect(config.MONGO_URL, {
  useNewUrlParser: true
});

const db = mongoose.connection;

db.once("open", () => console.log("✅ db open!!"));

db.on("error", () => console.log("✅ db error!!"));

new Server().listen(PORT, () => console.log("✅ open lunch server!!"));
