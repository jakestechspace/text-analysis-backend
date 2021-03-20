require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT
const limiter = require("./rateLimit")

app.set("view engine", "html")
app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(limiter)

const makeFetch = require("./makeFetch")
const getParams = require("./getParams")

app.post('/sentiment', async (req, res) => {
  const { text } = req.body
  res.send(await makeFetch(getParams(text)))
})

app.listen(port)
