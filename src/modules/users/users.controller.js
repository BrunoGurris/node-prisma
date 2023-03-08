const prisma = require('../../../prisma/client')
const { UsersService } = require('./users.service')
const usersService = new UsersService()

class UsersController {

  async getAll(request, response) {
    const users = await prisma.user.findMany()
    return response.status(200).json(users)
  }


  async create(request, response) {
    const body = request.body
    return usersService.create(body, response)
  }


  async edit(request, response) {
    const body = request.body
    const user = await prisma.user.findUnique({
      where: {
        id: Number(request.params.id)
      }
    })
    
    return usersService.edit(user, body, response)
  }


  async delete(request, response) {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(request.params.id)
      }
    })

    return usersService.delete(user, response)
  }
}

module.exports = { UsersController }

