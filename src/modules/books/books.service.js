const prisma = require('../../../prisma/client')
const { BooksRepository } = require('./books.repository')
const booksRepository = new BooksRepository()

class BooksService {

  async create(body, response, user) {

    /*
    |--------------------------------------------------------------------------
    | Verifica se tem algum title
    |--------------------------------------------------------------------------
    */
    if (body.title.length < 5) {
      return response.status(400).json({
        message: 'O titulo deve ter no minino 5 digitos!'
      })
    }


    /*
    |--------------------------------------------------------------------------
    | Verifica se tem algum descrição
    |--------------------------------------------------------------------------
    */
    if (!body.description || body.description.length < 5) {
      return response.status(400).json({
        message: 'A descrição deve ter no minino 5 digitos!'
      })
    }

    return booksRepository.create(body, response, user)
  }
}

module.exports = { BooksService }