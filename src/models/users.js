const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    minlength: 5,
    required: true
  }
})

module.exports = mongoose.model('users', userSchema)
