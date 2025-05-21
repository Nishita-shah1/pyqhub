import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },
    name: { type: String, required: true },
    image: { type: String, required: false },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
