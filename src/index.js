const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = express();
const connectDB = require("./db/index");

connectDB();
/*
(async () => {
  try {
    mongoose.connect(`${process.env.DATABASE_URL}/${DB.DB_NAME}`);
    app.on("error", (error) => {
      console.log("Connction not built ", error);
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on ${process.env.PORT}...`);
    });
  } catch (error) {
    console.error("Error: ", error);
  }
})();
*/
