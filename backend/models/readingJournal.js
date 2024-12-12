const mongoose = require("mongoose");

const readingJournalSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  readingDescription: {
    type: String,
    required: false,
  },
  readingPageCount: {
    type: Number,
    required: true,
  },
});

const readingType = mongoose.model("readingJournal", readingJournalSchema);
module.exports = readingType;
