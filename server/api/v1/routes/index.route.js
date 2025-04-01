const songRoutes = require("./song.route")
const artistRoutes = require("./artist.route.js")
const userRoutes = require("./user.route.js")

module.exports = (app) => {
  const version = "/api/v1"

  app.use(version + "/artists", artistRoutes)

  app.use(version + "/songs", songRoutes)

  app.use(version + "/user", userRoutes)
  
  // app.use(version + "/songs", songRoutes)
}