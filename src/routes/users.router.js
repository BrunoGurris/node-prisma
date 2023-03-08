const express = require('express')
const { UsersController } = require('../modules/users/users.controller')
const router = express.Router()
const usersController = new UsersController()

router.get('/', usersController.getAll)
router.post('/', usersController.create)
router.put('/:id', usersController.edit)
router.delete('/:id', usersController.delete)

module.exports = router