const { newGroupFormValidationSchema } = require('../schemas')
const { newResponse, newError } = require('../../helpers/expressHelper')

module.exports = (client) => (req, res) => {
  try {
    newGroupFormValidationSchema.validateSync(req.body)

    client.set(
      `${req.body.eventId}:${req.body.host.id}`,
      JSON.stringify(req.body)
    )

    const msg = `Event created successfully in ${req.body.eventId}/${req.body.host.id}`
    return newResponse(res, { msg })
  } catch (err) {
    return newError(res, err)
  }
}
