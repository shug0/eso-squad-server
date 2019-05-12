import redisScan from 'redisscan'

// Promise : Scan the redis DB and return the pattern matched items
export const getRedisItems = (client, pattern, limit) => new Promise((resolve, reject) => {
  let result = {}

  redisScan({
    redis: client,
    pattern,
    keys_only: false,
    each_callback: function (type, key, subkey, length, value, cb) {
      if (Object.keys(result).length === limit) return cb()
      result[key] = JSON.parse(value)
      cb()
    },
    done_callback: err => {
      if (err) return reject(err)
      return resolve(result)
    }
  })
})
