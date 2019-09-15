import mongoose from "mongoose";

const menuSchema = mongoose.Schema({
  name: {
    type: String
  },
  price: {
    type: Number
  },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Type"
  }
});

const model = mongoose.model("Menu", menuSchema);

export default model;
