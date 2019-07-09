// @ts-ignore
import redisScan from "redisscan";
import { RedisClient } from "redis";

// Promise : Scan the redis DB and return the pattern matched items
export const getRedisItems = (
  client: RedisClient,
  pattern: RegExp | string,
  limit: number
) =>
  new Promise((resolve, reject) => {
    let result: {[key: string]: Object} = {};

    redisScan({
      redis: client,
      pattern,
      keys_only: false,
      each_callback: function(
        type: any,
        key: any,
        subkey: any,
        length: any,
        value: any,
        cb: any
      ) {
        if (Object.keys(result).length === limit) return cb();
        result[key] = JSON.parse(value);
        cb();
      },
      done_callback: (err: any) => {
        if (err) return reject(err);
        return resolve(result);
      }
    });
  });
