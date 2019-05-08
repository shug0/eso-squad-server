module.exports = {
  newResponse: (res, data) => res.status(200).json(data),
  newError: (res, err) => res.status(400).json({ err })
}
