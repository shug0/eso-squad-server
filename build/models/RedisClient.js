"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = __importDefault(require("redis"));
const util_1 = require("util");
const logger_1 = require("../helpers/logger");
const redisScan_1 = require("./redisScan");
class RedisClientModel {
    constructor(params) {
        this.client = redis_1.default.createClient(params);
        this.client.on("connect", () => logger_1.logDone("Redis connected"));
        this.client.on("error", err => logger_1.logError(`Redis Error : ${err}`));
        this.set = util_1.promisify(this.client.set).bind(this.client);
        this.hset = util_1.promisify(this.client.hset).bind(this.client);
        this.hdel = util_1.promisify(this.client.hdel).bind(this.client);
        this.hgetall = util_1.promisify(this.client.hgetall).bind(this.client);
    }
    getItems(pattern, limit = 30) {
        return redisScan_1.getRedisItems(this.client, pattern, limit);
    }
}
exports.default = RedisClientModel;
//# sourceMappingURL=RedisClient.js.map