import { GROUPS_PREFIX, PLAYERS_PREFIX } from '../constants/redis'

export const getGroupKey = (eventId, hostId) => `${GROUPS_PREFIX}:${eventId}:${hostId}`
export const getGroupPlayersKey = (groupId) => `${PLAYERS_PREFIX}:${groupId}`

export const getGroupsPattern = () => `${GROUPS_PREFIX}:*`
export const getGroupsEventPattern = (eventKey) => `${GROUPS_PREFIX}:${eventKey}:*`
