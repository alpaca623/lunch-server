import app from "./server";
import config from "./config";
import mongoose from "mongoose";
import config from "./config";

const PORT = process.env.PORT || config.PORT;

mongoose.connect(process.env.MONGO_URL || config.MONGO_URL, {
  useNewUrlParser: true
});

const db = mongoose.connection;

db.once("open", () => console.log("✅ db open!!"));

db.on("error", () => console.log("✅ db error!!"));

app.listen(PORT, () => console.log("✅ open lunch server!!"));
