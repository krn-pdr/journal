const mongoose = require("mongoose");

const moodTrackerSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  mood: {
    type: String,
    required: true,
  },
});
const moodType = mongoose.model("moodTracker", moodTrackerSchema);
module.exports = moodType;
