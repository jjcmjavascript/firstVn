Object.prototype.find = function (callback) { //eslint-disable-line
  const values = this
  let result = null

  for (const key in values) {
    const value = values[key]
    if (callback(key, value)) {
      result = value
      break
    }
  }

  return result
}

Object.prototype.findKey = function (callback) { //eslint-disable-line
  const values = this
  let result = null

  for (const key in values) {
    const value = values[key]
    if (callback(key, value)) {
      result = key
      break
    }
  }

  return result
}

export default Object
