import mongoose from "mongoose";
// dotenvConfig.js

import dotenv from "dotenv";

// Load environment variables from .env.local file
dotenv.config({ path: ".env.local" });

const connectDB = () => {
  console.log(process.env.MONGO_URI);
  try {
    mongoose.connect(process.env.MONGO_URI || "");
    console.log(`Connected to DB`);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};
export default connectDB;
