class UsersController {

    async getAll(req, res) {
        res.send('Get All')
    }

    async create(req, res) {
        res.send('Create')
    }

    async edit(req, res) {
        res.send('Edit')
    }

    async delete(req, res) {
        res.send('Delete')
    }
}

module.exports = {UsersController}

