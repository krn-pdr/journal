const mongoose = require("mongoose");

const AnxietySchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  anxietyLevel: {
    type: Number,
    required: true,
  },
});

const anxietyLevel = mongoose.model("anxietyLevel", AnxietySchema);
module.exports = anxietyLevel;
