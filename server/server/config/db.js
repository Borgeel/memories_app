import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "memories_app",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Mongo DB connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
