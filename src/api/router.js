import express from 'express'
import RedisClient from '../models/RedisClient'
import { logDone } from '../helpers/logger'
import getGroups from './groups/getGroups'
import getGroupsEvent from './groups/getGroupsEvent'
import postGroup from './groups/postGroup'
import { REDIS_CONFIG } from '../constants/redis'

const router = express.Router()

// REDIS INIT
const redis = new RedisClient(REDIS_CONFIG)

// ROUTES
router.get('/groups', getGroups(redis))
router.get('/groups/:events', getGroupsEvent(redis))
router.post('/groups', postGroup(redis))

logDone('API Router loaded')

export default router
