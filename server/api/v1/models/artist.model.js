const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema(
  {
    name: String,
    followers: Number,
    genres: Array,
    popularity: Number,
    type: String,
    image: String
  }
);

const Artist = mongoose.model("Artist", artistSchema, "artists");

module.exports = Artist;