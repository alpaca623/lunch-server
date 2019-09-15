import dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

const db = mongoose.connection;

db.once("open", () => console.log("✅ db open!!"));

db.on("error", () => console.log("✅ db error!!"));
