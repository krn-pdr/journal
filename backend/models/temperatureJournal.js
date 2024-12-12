const mongoose = require("mongoose");

const temperatureJournalSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  temperatureRange: {
    type: Number,
    required: true,
  },
});
const temperatureJournal = mongoose.model(
  "temperatureJournal",
  temperatureJournalSchema
);
module.exports = temperatureJournal;
