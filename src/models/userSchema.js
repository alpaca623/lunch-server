import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    // required: true,
  }
});

const model = mongoose.model("User", userSchema);

export default model;
