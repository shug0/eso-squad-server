const isEmpty = require('lodash/isEmpty')
const { newResponse, newError } = require('../../helpers/expressHelper')
const { getRedisItems } = require('../../helpers/redisHelper')

module.exports = (client) => (req, res) => {
  const events = req.params.events.split(',')

  if (!events.length) return newError(res, { msg: 'Please provide the eventId' })

  const eventsGetPromises = events.map(eventKey => (
    getRedisItems(client, `*${eventKey}*`)
  ))

  Promise.all(eventsGetPromises)
    .then(result => {
      const resultUnEmpty = result.filter(obj => !isEmpty(obj))
      newResponse(res, resultUnEmpty[0])
    })
    .catch(err => newError(res, err))
}
