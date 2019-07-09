"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("../constants/redis");
const getKeyPrefix = (host) => `${redis_1.GROUPS_PREFIX}:${host.region}:${host.platform}`;
exports.getGroupKey = (host, eventId) => `${getKeyPrefix(host)}:${eventId}:${host.id}`;
exports.getGroupsPattern = (host) => `${getKeyPrefix(host)}:*`;
exports.getGroupsEventPattern = (host, eventKey) => `${getKeyPrefix(host)}:${eventKey}:*`;
exports.getGroupPlayersKey = (groupId) => `${redis_1.PLAYERS_PREFIX}:${groupId}`;
//# sourceMappingURL=keyGenerator.js.map