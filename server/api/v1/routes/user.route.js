const express = require("express")
const router = express.Router()

const controller = require('../controllers/user.controller')

router.post("/validateGmail", controller.validateGmail)

router.post("/register", controller.registerPost)

module.exports = router