import { GROUPS_PREFIX, PLAYERS_PREFIX } from '../constants/redis'
import Player from "../constants/models/Player";

const getKeyPrefix = (host: Player) =>
  `${GROUPS_PREFIX}:${host.region}:${host.platform}`

export const getGroupKey = (host: Player, eventId: string) =>
  `${getKeyPrefix(host)}:${eventId}:${host.id}`

export const getGroupsPattern = (host: Player) =>
  `${getKeyPrefix(host)}:*`

export const getGroupsEventPattern = (host: Player, eventKey: string) =>
  `${getKeyPrefix(host)}:${eventKey}:*`

export const getGroupPlayersKey = (groupId: string) =>
  `${PLAYERS_PREFIX}:${groupId}`
