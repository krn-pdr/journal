const mongoose = require("mongoose");

const movieDataSchema = new mongoose.Schema(
  {
    movieName: {
      type: String,
      required: true,
    },
    movieGenre: {
      type: String,
      required: true,
    },
    movieRating: {
      type: Number,
      required: true,
    },
    movieHighlight: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const movieDataModel = mongoose.model("movieData", movieDataSchema);
module.exports = movieDataModel;
