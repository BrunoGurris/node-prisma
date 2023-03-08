const prisma = require('../../../prisma/client')
const { UsersService } = require('./users.service')
const usersService = new UsersService()

class UsersController {

  async getAll(req, res) {
    res.send('Get All')
  }


  async create(request, response) {
    const body = request.body

    return await usersService.create(body, response)
  }


  async edit(request, response) {
    const body = request.body
    const user = await prisma.user.findUnique({
      where: {
        id: Number(request.params.id)
      }
    })

    return await usersService.edit(user, body, response)
  }


  async delete(request, response) {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(request.params.id)
      }
    })

    return await usersService.delete(user, response)
  }
}

module.exports = { UsersController }

