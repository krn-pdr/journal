const mongoose = require("mongoose");

const weatherJournalSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  weatherType: {
    type: Number,
    required: true,
  },
});
const weatherJournal = mongoose.model("weatherJournal", weatherJournalSchema);
module.exports = weatherJournal;