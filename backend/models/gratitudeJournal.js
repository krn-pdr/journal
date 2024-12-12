const mongoose = require("mongoose");

const gratitudeJournalSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  gratitude: {
    type: String,
    required: true,
  },
});
const gratitudeJournal = mongoose.model(
  "gratitudeJournal",
  gratitudeJournalSchema
);
module.exports = gratitudeJournal;