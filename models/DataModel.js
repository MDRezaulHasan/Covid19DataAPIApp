const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
    hubId: Number,
    user: String,
    location: String,
    sensorType: String,
    sensorId: Number,
    sensorData: Number,
    sensorUnit: String
});

module.exports = mongoose.model("sensordatacollections", DataSchema);
