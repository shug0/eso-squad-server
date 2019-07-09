"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SocketWithRedisClient_1 = __importDefault(require("../models/SocketWithRedisClient"));
const redis_1 = require("../constants/redis");
function default_1(io) {
    // eslint-disable-next-line no-new
    new SocketWithRedisClient_1.default(redis_1.REDIS_CONFIG, io);
}
exports.default = default_1;
//# sourceMappingURL=base.js.map