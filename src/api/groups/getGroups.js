import { newResResponse, newResError } from '../../helpers/expressHelper'
import { getGroupsPattern } from '../../helpers/keyGenerator'

export default (redis) => (req, res) => (
  // Get all the groups limited to 4 items
  redis.getItems(getGroupsPattern(), 4)
    .then(result => newResResponse(res, result))
    .catch(err => newResError(res, err))
)
