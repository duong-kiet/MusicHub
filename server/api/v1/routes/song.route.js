const express = require("express")
const router = express.Router()

const controller = require('../controllers/song.controller')

router.get("/", controller.index)

router.get("/top", controller.topSong)

module.exports = router