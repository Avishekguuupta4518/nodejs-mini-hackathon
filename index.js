const express = require("express");
const mongoose = require("mongoose");
const complaintRoutes = require("./routes/route");
const dbConnection = require("./database/connection");

require("dotenv").config();

const app = express();
app.use(express.json());

dbConnection();

// Routes
app.use("/api/complaints", complaintRoutes);


app.listen(process.env.PORT, function () {
  console.log("server has started at port 8080");
});