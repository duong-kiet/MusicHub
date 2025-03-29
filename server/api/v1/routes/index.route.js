const songRoutes = require("./song.route")
const artistRoutes = require("./artist.route.js")

module.exports = (app) => {
  const version = "/api/v1"

  app.use(version + "/artists", artistRoutes)
  
  // app.use(version + "/songs", songRoutes)
}