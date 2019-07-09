import SocketWithRedisClient from "../models/SocketWithRedisClient";
import { REDIS_CONFIG } from "../constants/redis";
import * as SocketIO from "socket.io";

export default function(io: SocketIO.Server) {
  // eslint-disable-next-line no-new
  new SocketWithRedisClient(REDIS_CONFIG, io);
}
