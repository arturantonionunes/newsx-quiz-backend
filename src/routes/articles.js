const express = require('express')
const router = express.Router()
const prisma = require('../prisma')

// Get all articles
router.get('/', async (req, res) => {
  try {
    const articles = await prisma.article.findMany()
    res.json(articles)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch articles' })
  }
})

// Get single article
router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const article = await prisma.article.findUnique({
      where: { id: parseInt(id) },
    })
    res.json(article)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch article' })
  }
})

// Create article
router.post('/', async (req, res) => {
  const { headline, subheading, image, altTextImg, content, author } = req.body
  try {
    const newArticle = await prisma.article.create({
      data: {
        headline,
        subheading,
        image,
        altTextImg,
        content,
        author,
      },
    })
    res.status(201).json(newArticle)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create article' })
  }
})

// Update article
router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { headline, subheading, image, altTextImg, content, author } = req.body
  try {
    const updatedArticle = await prisma.article.update({
      where: { id: parseInt(id) },
      data: {
        headline,
        subheading,
        image,
        altTextImg,
        content,
        author,
      },
    })
    res.json(updatedArticle)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update article' })
  }
})

// Delete article
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    await prisma.article.delete({
      where: { id: parseInt(id) },
    })
    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete article' })
  }
})

module.exports = router
