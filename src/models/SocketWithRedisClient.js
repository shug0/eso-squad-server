import RedisClient from './RedisClient'
import { EVENT_USER_JOIN, PLAYER_NAMESPACE, EVENT_GROUP_UPDATE } from '../constants/sockets'
import { getGroupPlayersKey } from '../helpers/keyGenerator'
import { logError, logDone } from '../helpers/logger'

class SocketWithRedisClient extends RedisClient {
  constructor (redisParams, io) {
    super(redisParams)

    this.playersChannel = io.of(`/${PLAYER_NAMESPACE}`)
    const _this = this

    // When the user has properly joined the /players channel
    this.playersChannel.on('connection', function (socket) {
      // Wait the JOIN event sended by the client with group infos
      socket.on(EVENT_USER_JOIN, ({ groupId, user }) => {
        // Generate the players group key with groupId
        const playersGroupKey = getGroupPlayersKey(groupId)

        // Add the player in the socket playersChannel
        socket.join(groupId)

        // Add the player to the redis group
        _this.addPlayer(user, groupId, playersGroupKey).catch(logError)
        _this.broadcastGroupUpdate(groupId, playersGroupKey)

        // When player disconnect remove it from the group
        socket.on('disconnect', () => {
          _this.removePlayer(user, groupId, playersGroupKey).catch(logError)
          _this.broadcastGroupUpdate(groupId, playersGroupKey)
        })
      })
    })
    logDone('Socker.io watchers loaded')
  }

  broadcastGroupUpdate = async (groupId, playersGroupKey) => {
    // Get snapshot of current group && broadcast it to user
    const groupSnap = await this.hgetall(playersGroupKey)
    this.playersChannel.to(groupId).emit(EVENT_GROUP_UPDATE, groupSnap)
  }

  addPlayer = async (user, groupId, playersGroupKey) => {
    await this.hset(playersGroupKey, user.id, JSON.stringify(user))
  }

  removePlayer = async (user, groupId, playersGroupKey) => {
    await this.hdel(playersGroupKey, user.id)
  }
}

export default SocketWithRedisClient
