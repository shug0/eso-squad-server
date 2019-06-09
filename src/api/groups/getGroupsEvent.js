import isEmpty from 'lodash/isEmpty'
import { getGroupsEventPattern } from '../../helpers/keyGenerator'
import { newResResponse, newResError } from '../../helpers/expressHelper'

export default (redis) => (req, res) => {
  // Extract host params
  const { USER_REGION: region, USER_PLATFORM: platform } = req.cookies
  // Extract events from url params
  const events = req.params.events.split(',')
  // Check event string
  if (!events.length) return newResError(res, { msg: 'Please provide the eventId' })
  // Generate promise getter for each event
  const eventsGetPromises = events.map(eventKey => (
    redis.getItems(getGroupsEventPattern({ region, platform }, eventKey))
  ))
  // Execute all the getter and return the concatenated result
  Promise.all(eventsGetPromises)
    .then(result => {
      const resultUnEmpty = result.filter(obj => !isEmpty(obj))
      newResResponse(res, resultUnEmpty[0])
    })
    .catch(err => newResError(res, err))
}
