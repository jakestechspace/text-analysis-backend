require('dotenv').config()

const express = require('express')
const path = require("path")
const app = express()
app.set( "view engine", "html" );

// const assetsFolder = process.env.ENV === "dev" ? "/public"
// app.set("view options", {layout: false});

app.use(express.static(__dirname + '/public'));

const port = process.env.PORT

const makeFetch = require("./makeFetch")
const getParams = require("./getParams")

app.get('/sentiment', async (req, res) => res.send(await makeFetch(getParams())))

app.use('/', (req, res) => {
  if(process.env.ENV === 'dev') {
    res.sendFile(__dirname + "/public/index.html")
  }
})

app.listen(port)