const prisma = require('../../../prisma/client')

class UsersRepository {
  async create(body, response) {

    const user = await prisma.user.create({
      data: {
        name: body.name.toUpperCase(),
        email: body.email.toLowerCase(),
        password: body.password
      }
    })

    return response.status(201).json(user)
  }


  async edit(user, body, response) {

    const userUpdate = await prisma.user.update({
      where: {
        id: user.id
      },
      data: {
        name: body.name.toUpperCase()
      }
    })

    return response.status(200).json(userUpdate)
  }


  async delete(user, response) {
    
    const userDelete = await prisma.user.delete({
      where: {
        id: user.id
      }
    })

    return response.status(200).json(userDelete)
  }
}

module.exports = { UsersRepository }