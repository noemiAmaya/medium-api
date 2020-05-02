const jwt = require('../lib/jwt')
// Verificar que jwt es expedido por este mismo servidor
function auth (request, response, next) {
  const { authorization: token } = request.headers
  console.log('token', token)

  try {
    const decodedToken = jwt.verify(token)
    console.log('decodedToken', decodedToken)
    next()
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'Unauthorized'
    })
  }
}

module.exports = auth
