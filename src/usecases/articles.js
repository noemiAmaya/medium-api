
const Article = require('../models/articles') // importar el modelo

function getAll () { // visualizar todos los articulos (getAll)
  return Article.find()
}

function create (articleData) { // crear el articulo
  return Article.create(articleData)
}

function deleteByid (id) {
  return Article.findByIdAndRemove(id)
}

function updateByid (id, newArticlesData) {
  return Article.findByIdAndUpdate(id, newArticlesData)
}

module.exports = {
  getAll,
  create,
  deleteByid,
  updateByid
}
