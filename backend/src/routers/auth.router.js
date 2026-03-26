const express = require('express')

const authRouter = express.Router()

const { registerUserController } = require("src/controllers/auth.Controller")
const authController = require('..auth.Controller');
/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */

authRouter.post("/register", authController.registerUserController)



authRouter.post("/register", (req, res) => {
    res.send("User registration endpoint")
})

authRouter.post("/api/login", authController.loginUserController)

module.exports = authRouter