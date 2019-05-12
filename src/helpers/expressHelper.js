export const newResResponse = (res, data) => res.status(200).json(data)
export const newResError = (res, err) => res.status(400).json({ err })
