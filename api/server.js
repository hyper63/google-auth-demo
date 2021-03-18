import express from 'express'
import verify from './verify.js'
import cors from 'cors'

const app = express()
app.use(cors())

app.use('/api', verify(process.env.CLIENT_ID))

app.get('/api', (req, res) => {
  console.log('user', req.user)
  res.json(req.user)
})

app.get('/', (req, res) => res.json({"name": "auth-demo"}))

app.listen(4000)
