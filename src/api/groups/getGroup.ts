import { Request, Response } from 'express'
import { newResResponse, newResError } from "../../helpers/expressHelper";
import RedisClientModel from "../../models/RedisClient";

export default (redis: RedisClientModel) => (req: Request, res: Response) => {
  const groupId = req.params.groupId;

  // Get all the groups limited to 4 items
  return redis
    .getItems(groupId, 4)
    .then(result => newResResponse(res, result))
    .catch(err => newResError(res, err));
};
