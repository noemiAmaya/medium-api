const express = require('express')
const articlesRouter = require('./routes/articles')
const usersRouter = require('./routes/users')
const authRouter = require('./routes/auth')

const app = express()

app.use(express.json())

app.use((request, response, next) => {
  next()
})

app.use('/articles', articlesRouter)
app.use('/users', usersRouter)
app.use('/auth', authRouter)

module.exports = app
