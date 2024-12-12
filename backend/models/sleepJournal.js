const mongoose = require("mongoose");

const sleepJournalSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  sleepQuality: {
    type: Number,
    required: true,
  },
  sleepDescription: {
    type: String,
    required: false,
  },
  goToBedTime: {
    type: Number,
    required: true,
  },
  wakeUpTime: {
    type: Number,
    required: true,
  },
});

const sleepType = mongoose.model("sleepJournal", sleepJournalSchema);
module.exports = sleepType;
