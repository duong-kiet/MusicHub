const Song = require("../models/song.model")
const Artist = require("../models/artist.model")

// GET /api/v1/songs
module.exports.index = async (req, res) => {
  const songs = await Song
  .find({})
  .select("avatar name")
  
  return res.status(200).json(songs)
}

// GET /api/v1/songs/top
module.exports.topSong = async (req, res) => {
  const topSongs = await Song
  .find({})
  .sort({
    popularity: 'desc'
  })
  .limit(5)
  .select("avatar name id artist_id")
  .lean()

//   console.log(topSongs)
  for (song of topSongs) {
    const artistName = await Artist.findOne({
        id: song.artist_id
    }).select("name")
    song.artistName = artistName.name
  }
  
  return res.json(topSongs)
}




