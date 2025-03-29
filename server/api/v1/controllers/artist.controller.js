const Artist = require("../models/artist.model")

// GET /api/v1/artists
module.exports.index = async (req, res) => {
  const artists = await Artist
  .find({})
  .select("images name type id")
  
  return res.json(artists)
}

// GET /api/v1/artists/top
module.exports.topArtist = async (req, res) => {
  const topArtists = await Artist
  .find({})
  .sort({
    popularity: 'desc'
  })
  .limit(5)
  .select("images name type id")
  
  return res.json(topArtists)
}




