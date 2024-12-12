const mongoose = require("mongoose");

const highlightGratitudeTrackerSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  highlight: {
    type: String,
    required: true,
  },
  gratitude: {
    type: String,
    required: true,
  },
});
const highlightGratitudeTracker = mongoose.model(
  "highlightGratitudeTracker",
  highlightGratitudeTrackerSchema
);
module.exports = highlightGratitudeTracker;
