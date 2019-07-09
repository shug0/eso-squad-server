import redis, { RedisClient, ClientOpts } from "redis";
import { promisify } from "util";
import { logDone, logError } from "../helpers/logger";
import { getRedisItems } from "./redisScan";

class RedisClientModel {
  client: RedisClient;
  set: any;
  hset: any;
  hdel: any;
  hgetall: any;

  constructor(params: ClientOpts) {
    this.client = redis.createClient(params);
    this.client.on("connect", () => logDone("Redis connected"));
    this.client.on("error", err => logError(`Redis Error : ${err}`));

    this.set = promisify(this.client.set).bind(this.client);
    this.hset = promisify(this.client.hset).bind(this.client);
    this.hdel = promisify(this.client.hdel).bind(this.client);
    this.hgetall = promisify(this.client.hgetall).bind(this.client);
  }

  getItems(pattern: RegExp | string, limit = 30) {
    return getRedisItems(this.client, pattern, limit);
  }
}

export default RedisClientModel;
