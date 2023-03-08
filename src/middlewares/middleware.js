const jwt = require('jsonwebtoken')

const authMiddleware = (request, response, next) => {

  const authToken = request.headers.authorization

  if (!authToken) {
    return response.status(401).json({
      message: "Token inválido"
    })
  }

  const token = authToken.split(" ")[1]

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