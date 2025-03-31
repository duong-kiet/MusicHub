const express = require("express")
const router = express.Router()

const controller = require('../controllers/user.controller')

router.post("/validateGmail", controller.validateGmail)

router.post("/signup", controller.signupPost)

router.post("/signin", controller.signinPost)

module.exports = router