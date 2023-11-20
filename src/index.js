const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");
const connectDB = require("./db/index");

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`App is listening on port ${process.env.PORT}...`);
    });
  })
  .catch((error) => {
    console.log(`Database connection failed !!!`, error);
  });
// app.listen(process.env.PORT || 3000, () => {
//   console.log(`App is listening on port ${process.env.PORT}...`);
// });
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
