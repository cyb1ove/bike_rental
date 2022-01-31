import mongoose, { ConnectOptions, Mongoose } from "mongoose";
import dotenv from 'dotenv';

class Database {
  mongooseConnection: Mongoose | undefined;

  constructor() {
    dotenv.config();
    this.setConnection();
  }

  async setConnection() {
    if (process.env.MONGO_URL) {
      this.mongooseConnection = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions);
    }
  }
}

export default new Database();
