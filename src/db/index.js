const mongoose = require("mongoose");
//const express = require("express");
const DB = require("../constants");
//const app = express();

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DATABASE_URL}/${DB.DB_NAME}`
    );
    console.log(
      `\n Database Connected !! DB HOST ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("Error occuered: ", error);
    process.exit(1);
  }
};

module.exports = connectDB;
