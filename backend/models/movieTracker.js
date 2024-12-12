const mongoose = require("mongoose");

const movieTrackerSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  movieName: {
    type: String,
    required: true,
  },
  movieGenre: {
    type: String,
    required: false,
  },
  movieRating: {
    type: Number,
    required: false,
  },
  movieHighlight: {
    type: String,
    required: false,
  },
});
const movieTracker = mongoose.model("movieTracker", movieTrackerSchema);
module.exports = movieTracker;
