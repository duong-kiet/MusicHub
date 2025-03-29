const express = require("express")
const router = express.Router()

const controller = require('../controllers/artist.controller')

router.get("/", controller.index)

router.get("/top", controller.topArtist)

module.exports = router