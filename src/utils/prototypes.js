Object.prototype.findValue = function (callback) { //eslint-disable-line
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

Map.prototype.findValue = function (callback) { //eslint-disable-line
  const values = this
  let result = null

  for (const [key, value] of values) {
    if (callback(key, value)) {
      result = value
      break
    }
  }

  return result
}

Map.prototype.findKey = function (callback) { //eslint-disable-line
  const values = this
  let result = null

  for (const [key, value] of values) {
    if (callback(key, value)) {
      result = key
      break
    }
  }

  return result
}

Map.prototype.lastKey = function () { //eslint-disable-line
  return Array.from(this.keys()).pop()
}

Map.prototype.lastValue = function () { //eslint-disable-line
  return this.get(this.lastKey())
}

export default Object
