require('dotenv').config()
const express = require('express')
const cors = require('cors')
const articlesRouter = require('./routes/articles')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use('/api/articles', articlesRouter)

app.get('/', (req, res) => {
  res.send('Guess the Headline API')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
