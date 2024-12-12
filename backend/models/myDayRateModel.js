const mongoose = require("mongoose");

const myDayRateSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  myDayRate: {
    type: Number,
    required: true,
  },
});

const MyDayRate = mongoose.model("MyDayRate", myDayRateSchema);
module.exports = MyDayRate;
