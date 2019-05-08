const { newResponse, newError } = require('../../helpers/expressHelper')
const { getRedisItems } = require('../../helpers/redisHelper')

module.exports = (client) => (req, res) => (
  getRedisItems(client, '*', 4)
    .then(result => newResponse(res, result))
    .catch(err => newError(res, err))
)
