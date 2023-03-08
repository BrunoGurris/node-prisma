const decodeToken = (request, response) => {

  const authToken = request.headers.authorization

  if (!authToken) {
    return response.status(401).json({
      message: "Token inválido"
    })
  }

  return authToken.split(" ")[1]
}

module.exports = { decodeToken }