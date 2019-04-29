const express = require('express')
const router = express.Router()

const getApiRouter = (redisClient) => {
  router.get('/groups', function (req, res, next) {
    res.json({ msg: 'Welcome the the api' })
  })

  return router
}

module.exports = getApiRouter
