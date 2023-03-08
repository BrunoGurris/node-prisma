const prisma = require("../../../prisma/client")
const jwt = require('jsonwebtoken')

class AuthController {

  async login(request, response) {
    const user = await prisma.user.findFirst({
      where: {
        email: request.body.name,
        password: request.body.password
      }
    })

    if(!user) {
      return response.status(400).json({
        message: 'Usuário errado!'
      })
    }

    const token = jwt.sign({
      id: user.id
    }, process.env.JWT_SECRET, {
      expiresIn: "60s"
    })

    return response.status(200).json({token: token})
  }
}

module.exports = { AuthController }