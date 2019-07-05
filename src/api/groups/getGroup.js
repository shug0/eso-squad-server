import { newResResponse, newResError } from '../../helpers/expressHelper'

export default (redis) => (req, res) => {
  const groupId = req.params.groupId

  // Get all the groups limited to 4 items
  return redis.getItems(groupId, 4)
    .then(result => newResResponse(res, result))
    .catch(err => newResError(res, err))
}
