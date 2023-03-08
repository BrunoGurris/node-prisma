const { UsersService } = require('./users.service')
const usersService = new UsersService()

class UsersController {

    async getAll(req, res) {
        res.send('Get All')
    }

    async create(request, response) {
        const body = request.body
        body.name = body.name.toUpperCase()
        body.email = body.email.toLowerCase()
        
        return await usersService.create(body, response)
    }

    async edit(req, res) {
        res.send('Edit')
    }

    async delete(req, res) {
        res.send('Delete')
    }
}

module.exports = { UsersController }

