import mongoose from "mongoose";

const typeSchema = mongoose.Schema({
  type: {
    type: String,
    require: "name is required"
  },
  number: {
    type: Number
  }
});

const model = mongoose.model("Type", typeSchema);

export default model;
