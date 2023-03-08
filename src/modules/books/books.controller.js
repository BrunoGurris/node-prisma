const prisma = require('../../../prisma/client')
const jwt = require('jsonwebtoken')
const { decodeToken } = require('../../helpers/helper')
const { BooksService } = require('./books.service')
const booksService = new BooksService()

class BooksController {

  async getAll(request, response) {

    const jwtUser = jwt.decode(decodeToken(request, response))

    const books = await prisma.book.findMany({
      where: {
        userId: jwtUser.id
      }
    })

    return response.status(200).json(books)
  }


  async create(request, response) {
    const body = request.body
    const jwtUser = jwt.decode(decodeToken(request, response))
    const user = await prisma.user.findFirstOrThrow({
      where: {
        id: jwtUser.id
      }
    })

    return booksService.create(body, response, user)
  }
}

module.exports = { BooksController }

