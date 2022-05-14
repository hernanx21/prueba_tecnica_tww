const app = require('express').Router()
const axios = require('axios')
const { getJokes } = require('../controllers/main.controller')({ axios })

app.get('/', getJokes)

module.exports = app