const prisma = require('../../../prisma/client')
const { UsersRepository } = require('./users.repository')
const usersRepository = new UsersRepository()

class UsersService {

  async create(body, response) {

    /*
    |--------------------------------------------------------------------------
    | Verifica se tem algum nome
    |--------------------------------------------------------------------------
    */
    if(body.name.length < 5) {
      return response.status(400).json({
        message: 'O nome deve ter no minino 5 digitos!'
      })
    }


    /*
    |--------------------------------------------------------------------------
    | Verifica se o email já existe
    |--------------------------------------------------------------------------
    */
    if (await prisma.user.findUnique({
      where: {
        email: body.email
      }
    })) {
      return response.status(400).json({
        message: 'Este email já esta sendo utilizado!'
      })
    }


    /*
    |--------------------------------------------------------------------------
    | Verifica a senha
    |--------------------------------------------------------------------------
    */
    if(body.password.length < 6) {
      return response.status(400).json({
        message: 'A senha deve ter no minimo 6 digitos!'
      })
    }

    return await usersRepository.create(body, response)
  }
}

module.exports = { UsersService }