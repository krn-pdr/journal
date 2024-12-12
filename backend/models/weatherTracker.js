const mongoose = require("mongoose");

const weatherTrackerSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  weatherType: {
    type: Number,
    required: true,
  },
  temperatureRange: {
    type: Number,
    required: true,
  },
});
const weatherType = mongoose.model("weatherTracker", weatherTrackerSchema);
module.exports = weatherType;
