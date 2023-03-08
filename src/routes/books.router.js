const express = require('express')
const { authMiddleware } = require('../middlewares/middleware')
const { BooksController } = require('../modules/books/books.controller')

const router = express.Router()
const booksController = new BooksController()

router.get('/', authMiddleware, booksController.getAll)
router.post('/', authMiddleware, booksController.create)

module.exports = router