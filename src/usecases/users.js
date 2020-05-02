const bcrypt = require('bcrypt')

const jwt = require('../lib/jwt')

const User = require('../models/users')

async function signup (newUserData) {
  const { email, password } = newUserData
  if (!email) throw new Error('Email is required')
  if (!password) throw new Error('Password is required')
  const userAlreadyExists = await User.findOne({ email })

  if (userAlreadyExists) throw new Error('The email is already registered')
  if (password.length < 5) throw new Error('The password is very short')

  const hash = await bcrypt.hash(password, 10)

  return User.create({ ...newUserData, password: hash })
}

async function login (email, password) {
  const user = await User.findOne({ email })
  if (!user) throw new Error('The data is invalid')

  const isPasswordCorrect = await bcrypt.compare(password, user.password)
  if (!isPasswordCorrect) throw new Error('The data is invalid')

  return jwt.sign({ id: user._id })
}

module.exports = {
  signup,
  login
}
