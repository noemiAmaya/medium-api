const express = require('express')
const articles = require('../usecases/articles')
const auth = require('../middleawares/auth')
const router = express.Router()

router.use((request, response, next) => {
  next()
})

router.get('/', auth, (request, response, next) => {
  next()
}, async (request, response) => {
  try {
    const allArticles = await articles.getAll()
    response.json({
      message: 'all articles',
      data: {
        articles: allArticles
      }
    })
  } catch (error) {
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.post('/', auth, async (request, response) => {
  try {
    const newArticle = await articles.create(request.body)
    response.json({
      success: true,
      message: 'Your article was created',
      data: {
        article: newArticle
      }
    })
  } catch (error) {
    response.json({
      success: false,
      error: error.message

    })
  }
})

router.delete('/:id', auth, async (request, response) => {
  try {
    const { id } = request.params
    const ArticleDeleted = await articles.deleteByid(id)
    response.json({
      success: true,
      message: ` The article ${id} was deleted `,
      data: {
        article: ArticleDeleted
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.put('/:id', auth, async (request, response) => {
  try {
    const { id } = request.params
    const articlesUpdated = await articles.updateByid(id, request.body)
    response.json({
      success: true,
      message: `The article ${id} was updated`,
      data: {
        articlesUpdated
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

module.exports = router
