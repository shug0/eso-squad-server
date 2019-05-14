import SocketWithRedisClient from '../models/SocketWithRedisClient'
import { REDIS_CONFIG } from '../constants/redis'

export default function (io) {
  // eslint-disable-next-line no-new
  new SocketWithRedisClient(REDIS_CONFIG, io)
}
