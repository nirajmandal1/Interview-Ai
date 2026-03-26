const express = require('express')

const cookieParser = require("cookie-parser")

const app = express()
app.use(express.json())
app.use(cookieParser())
// require all the routers here
const authRouter = require('./routers/auth.router')


// using all the routers here

app.use("/api/auth", authRouter)



module.exports = app
