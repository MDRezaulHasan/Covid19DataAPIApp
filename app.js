const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");
const dataRoute = require("./routes/GetData");
const url = process.env.DB_CONNECTION;
const app = express();
const port = process.env.port || 3000
app.use(bodyParser.json());
app.use("/posts", dataRoute)
app.use("/", dataRoute);
mongoose.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongodb");
  }
);
// app.get("/", (req, res) => {
//   res.send("We are in home");
// });

app.listen(port);
// const db Connection
