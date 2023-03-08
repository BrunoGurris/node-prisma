const prisma = require('../../../prisma/client')

class BooksRepository {
  async create(body, response, user) {

    const book = await prisma.book.create({
      data: {
        userId: user.id,
        title: body.title.toUpperCase(),
        description: body.description,
      }
    })

    return response.status(201).json(book)
  }
}

module.exports = { BooksRepository }