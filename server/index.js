const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const database = require("./config/database")
require("dotenv").config()

const routesApi = require("./api/v1/routes/index.route")

const app = express()
const port = process.env.PORT

app.use(cors())

database.connect()

app.use(cookieParser())

// Parse application/json
app.use(bodyParser.json())
// Dùng khi gửi form
app.use(bodyParser.urlencoded({ extended: false }))

// Routes Version 
routesApi(app)


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})