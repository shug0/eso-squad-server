import { newGroupFormValidationSchema } from '../schemas'
import { newResResponse, newResError } from '../../helpers/expressHelper'
import { getGroupKey } from '../../helpers/keyGenerator'

export default (redis) => (req, res) => {
  try {
    // Payload values integrity checking
    newGroupFormValidationSchema.validateSync(req.body)
    // Generate key for group with eventId & hostId
    const key = getGroupKey(req.body.host, req.body.eventId)
    // Create the group in redis
    redis.set(
      key,
      JSON.stringify(req.body)
    )
    // Return success message
    return newResResponse(res, {
      msg: `Event created successfully in ${key}`,
      groupKey: key
    })
  } catch (err) {
    return newResError(res, err)
  }
}
