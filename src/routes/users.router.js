const express = require('express')
const { authMiddleware } = require('../middlewares/middleware')
const { UsersController } = require('../modules/users/users.controller')

const router = express.Router()
const usersController = new UsersController()

router.get('/', authMiddleware, usersController.getAll)
router.post('/', usersController.create)
router.put('/:id', authMiddleware, usersController.edit)
router.delete('/:id', authMiddleware, usersController.delete)

module.exports = router