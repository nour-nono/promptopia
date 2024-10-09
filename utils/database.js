import { connect, set } from "mongoose";
let isConnected = false;
export const connectDB = async () => {
    if (isConnected) {  
      console.log("Already connected to MongoDB");
      return;
    }
  try {
    set("strictQuery", true); // if true, mongoose will throw an error if you try to query by a field that is not in the schema
    const conn = await connect(process.env.MONGO_URI, {
      dbName: "promptopia",
    });

    isConnected = true;
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};
