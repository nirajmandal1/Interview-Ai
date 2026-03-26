require ("dotenv").config()
const app = require("./src/app")
const connectDB = require("./src/config/datbase.js")
const invokeGeminiAi = require("./src/sevices/api.service.js")  

connectDB()
 app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
    invokeGeminiAi()
})  