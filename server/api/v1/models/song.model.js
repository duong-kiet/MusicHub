const mongoose = require("mongoose");

const songSchema = new mongoose.Schema(
  {
    album_id: String,
    artist_id: String,
    category_id: String,
    avatar: String,
    audio: String,
    duration: Number,
    lyric: String,
    id: String,
    name: String,
    popularity: Number,
    slug: String,
  }
);

const Song = mongoose.model("Song", songSchema, "songs");

module.exports = Song;