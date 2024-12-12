const mongoose = require("mongoose");

const highlightJournalSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  highlight: {
    type: String,
    required: true,
  },
});
const highlightJournal = mongoose.model(
  "highlightJournal",
  highlightJournalSchema
);
module.exports = highlightJournal;