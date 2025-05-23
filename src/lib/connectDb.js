import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    throw new Error("Error while connecting to DB", error);
  }
};
