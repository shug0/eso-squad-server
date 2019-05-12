import SocketWithRedisClient from '../models/SocketWithRedisClient'

export default function (io) {
  // eslint-disable-next-line no-new
  new SocketWithRedisClient({ port: 32768 }, io)
}
