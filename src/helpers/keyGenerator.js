import { GROUPS_PREFIX, PLAYERS_PREFIX } from '../constants/redis'

const getKeyPrefix = (host) =>
  `${GROUPS_PREFIX}:${host.region}:${host.platform}`

export const getGroupKey = (host, eventId) =>
  `${getKeyPrefix(host)}:${eventId}:${host.id}`

export const getGroupsPattern = host =>
  `${getKeyPrefix(host)}:*`

export const getGroupsEventPattern = (host, eventKey) =>
  `${getKeyPrefix(host)}:${eventKey}:*`

export const getGroupPlayersKey = (groupId) =>
  `${PLAYERS_PREFIX}:${groupId}`
