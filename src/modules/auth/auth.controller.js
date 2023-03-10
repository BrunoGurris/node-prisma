const prisma = require("../../../prisma/client")
const jwt = require('jsonwebtoken')
const { decodeToken } = require("../../helpers/helper")

class AuthController {

  async login(request, response) {

    const user = await prisma.user.findFirst({
      where: {
        email: request.body.email,
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
      expiresIn: "600s"
    })

    return response.status(200).json({token: token})
  }


  async me(request, response) {
    return response.status(200).json(jwt.decode(decodeToken(request, response)))
  }
}

module.exports = { AuthController }