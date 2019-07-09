"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RedisClient_1 = __importDefault(require("./RedisClient"));
const sockets_1 = require("../constants/sockets");
const keyGenerator_1 = require("../helpers/keyGenerator");
const logger_1 = require("../helpers/logger");
class SocketWithRedisClient extends RedisClient_1.default {
    constructor(redisParams, io) {
        super(redisParams);
        this.broadcastPlayersUpdate = (groupId, playersGroupKey) => __awaiter(this, void 0, void 0, function* () {
            // Get snapshot of current group && broadcast it to user
            const playersSnap = yield this.hgetall(playersGroupKey);
            this.playersChannel.to(groupId).emit(sockets_1.EVENT_PLAYERS_UPDATE, playersSnap);
        });
        this.addPlayer = (user, key) => __awaiter(this, void 0, void 0, function* () {
            yield this.hset(key, user.id, JSON.stringify(user));
        });
        this.removePlayer = (user, key) => __awaiter(this, void 0, void 0, function* () {
            yield this.hdel(key, user.id);
        });
        this.playersChannel = io.of(`/${sockets_1.PLAYER_NAMESPACE}`);
        const _this = this;
        // When the user has properly joined the /players channel
        this.playersChannel.on("connection", function (socket) {
            // Wait the JOIN event sended by the client with group infos
            socket.on(sockets_1.EVENT_USER_JOIN, ({ groupId, user }) => {
                // Generate the players group key with groupId
                const playersGroupKey = keyGenerator_1.getGroupPlayersKey(groupId);
                // Add the player in the socket playersChannel
                socket.join(groupId);
                // Add the player to the redis group
                _this.addPlayer(user, playersGroupKey).catch(logger_1.logError);
                _this.broadcastPlayersUpdate(groupId, playersGroupKey);
                // When player disconnect remove it from the group
                socket.on("disconnect", () => {
                    _this.removePlayer(user, playersGroupKey).catch(logger_1.logError);
                    _this.broadcastPlayersUpdate(groupId, playersGroupKey);
                });
            });
        });
        logger_1.logDone("Socker.io watchers loaded");
    }
}
exports.default = SocketWithRedisClient;
//# sourceMappingURL=SocketWithRedisClient.js.map