const express = require('express')
const router = express.Router()

const getGroups = require('./groups/getGroups')
const getGroupsEvent = require('./groups/getGroupsEvent')
const postGroup = require('./groups/postGroup')

const getApiRouter = (client) => {
  router.get('/groups', getGroups(client))
  router.get('/groups/:events', getGroupsEvent(client))
  router.post('/groups', postGroup(client))

  return router
}

module.exports = getApiRouter
