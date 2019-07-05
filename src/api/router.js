import express from 'express'
import RedisClient from '../models/RedisClient'
import { logDone } from '../helpers/logger'
import getGroups from './groups/getGroups'
import getGroup from './groups/getGroup'
import getGroupsEvent from './groups/getGroupsEvent'
import postGroup from './groups/postGroup'
import { REDIS_CONFIG } from '../constants/redis'
import { newResError } from '../helpers/expressHelper'

const router = express.Router()

// Cookies with host infos are required in every request
router.use((req, res, next) => {
  const { USER_REGION, USER_PLATFORM } = req.cookies
  if (!USER_REGION || !USER_PLATFORM) newResError(res, 'Please setup your account.')
  else next()
})

// REDIS INIT
const redis = new RedisClient(REDIS_CONFIG)

// ROUTES
router.get('/group/:groupId', getGroup(redis))
router.get('/groups', getGroups(redis))
router.get('/groups/:events', getGroupsEvent(redis))
router.post('/groups', postGroup(redis))

logDone('API Router loaded')

export default router
