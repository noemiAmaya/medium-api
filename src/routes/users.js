const express = require('express')
const users = require('../usecases/users')
const router = express.Router()

router.post('/signup', async (request, response) => {
  try {
    const newUser = await users.signup(request.body)
    response.json({
      success: true,
      message: 'The user was successfully registered',
      data: {
        user: newUser
      }
    })
  } catch (error) {
    response.json({
      success: false,
      error: error.message

    })
  }
})

module.exports = router
