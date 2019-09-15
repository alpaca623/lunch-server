import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  type: String,
  menu: String,
  user: String,
  option: {
    type: Number,
    default: 0
  },
  createAt: {
    type: Date,
    default: new Date()
  }
});

const model = mongoose.model("Order", orderSchema);

export default model;
