const mongoose = require("mongoose");

async function dbConnection() {

  await mongoose.connect(
    "mongodb+srv://080bct020_db_user:uw2JL65y8rgdF8eW@cluster0.ocbrxjc.mongodb.net/mydb"
  );
  console.log("DB connected successfully !!!");

}

module.exports = dbConnection;
