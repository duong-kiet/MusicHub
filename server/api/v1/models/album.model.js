const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema(
  {
    name: String,
    followers: Number,
    genres: Array,
    popularity: Number,
    type: String,
    images: String
  }
);

const Album = mongoose.model("Album", albumSchema, "albums");

module.exports = Album;