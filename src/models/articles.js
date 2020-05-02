const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    maxlength: 350,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: String,
    minlength: 4,
    maxlength: 30,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  estimatedReadTime: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('articles', articleSchema)
