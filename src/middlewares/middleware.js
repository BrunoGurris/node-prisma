const jwt = require('jsonwebtoken')
const { decodeToken } = require('../helpers/helper')

const authMiddleware = (request, response, next) => {

  const token = decodeToken(request, response)

  try {
    jwt.verify(token, process.env.JWT_SECRET)
    return next()
  }
  catch (e) {
    return response.status(401).json({
      message: "Token inválido"
    })
  }
}


const adminMiddleware = (request, response, next) => {
  next()
}

module.exports = { authMiddleware, adminMiddleware }