const mongoose = require("mongoose");

const dreamJournalSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  dreamType: {
    type: Number,
    required: true,
  },
  dreamDescription: {
    type: String,
    required: false,
  },
});

const dreamJournal = mongoose.model("dreamJournal", dreamJournalSchema);
module.exports = dreamJournal;
