const mongoose = require('mongoose')
const USER = 'jazzamaya'
const PASSWORD = 'Njma_132123'
const HOST = 'kodemia-dix0w.mongodb.net'
const NAME = 'mediumblog'
const url = `mongodb+srv://${USER}:${PASSWORD}@${HOST}/${NAME}`

function connect () {
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
}

module.exports = {
  connect
}
