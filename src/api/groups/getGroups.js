import { newResResponse, newResError } from '../../helpers/expressHelper'
import { getGroupsPattern } from '../../helpers/keyGenerator'

export default (redis) => (req, res) => {
  const { USER_REGION, USER_PLATFORM } = req.cookies
  const pattern = getGroupsPattern({ platform: USER_PLATFORM, region: USER_REGION })

  // Get all the groups limited to 4 items
  return redis.getItems(pattern, 4)
    .then(result => newResResponse(res, result))
    .catch(err => newResError(res, err))
}
