"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const redisscan_1 = __importDefault(require("redisscan"));
// Promise : Scan the redis DB and return the pattern matched items
exports.getRedisItems = (client, pattern, limit) => new Promise((resolve, reject) => {
    let result = {};
    redisscan_1.default({
        redis: client,
        pattern,
        keys_only: false,
        each_callback: function (type, key, subkey, length, value, cb) {
            if (Object.keys(result).length === limit)
                return cb();
            result[key] = JSON.parse(value);
            cb();
        },
        done_callback: (err) => {
            if (err)
                return reject(err);
            return resolve(result);
        }
    });
});
//# sourceMappingURL=redisScan.js.map