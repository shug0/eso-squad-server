const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const redis = require('redis')

const app = express()

// LOGGER & PARSER
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// REDIS INIT
const redisClient = redis.createClient({ port: 32768 })
redisClient.on('error', function (err) {
  console.log('Error ' + err)
})

// ROUTES
const getApiRouter = require('./routes/api')
app.use('/api', getApiRouter(redisClient))

// Export APP
module.exports = app
