const express = require('express')
const { authMiddleware } = require('../middlewares/middleware')
const { AuthController } = require('../modules/auth/auth.controller')

const router = express.Router()
const authController = new AuthController()

router.post('/login', authController.login)
router.get('/me', authMiddleware, authController.me)

module.exports = router