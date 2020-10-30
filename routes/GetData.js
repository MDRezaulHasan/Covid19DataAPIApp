const express = require("express");
const router = express.Router();
const dataModel = require("../models/DataModel");

router.get("/", async (req, res) => {
  try {
    const getData = await dataModel.find().limit(50);
    console.log("Data: " + getData);
    res.json(getData);
  } catch (error) {
    res.json({ message: error });
  }
});


module.exports = router;
