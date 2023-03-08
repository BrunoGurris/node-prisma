const prisma = require('../../../prisma/client')

class UsersRepository {
  async create(body, response) {

    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password
      }
    })

    return response.status(201).json(user)
  }
}

module.exports = { UsersRepository }