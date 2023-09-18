class Square {
  constructor ({
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    color = 'black',
    lineColor = 'black',
    lineWidth = 0,
    fill = false,
    radius = 0
  }) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
    this.lineWidth = lineWidth
    this.fill = fill
    this.radius = radius
    this.lineColor = lineColor
  }

  setX (x) {
    this.x = x
    return this
  }

  setY (y) {
    this.y = y
    return this
  }

  setWidth (width) {
    this.width = width
    return this
  }

  setHeight (height) {
    this.height = height
    return this
  }

  setColor (color) {
    this.color = color
    return this
  }

  setLineWidth (lineWidth) {
    this.lineWidth = lineWidth
    return this
  }

  setFill (fill) {
    this.fill = fill
    return this
  }

  setRadius (radius) {
    this.radius = radius
    return this
  }

  withLine (context) {
    if (this.lineWidth > 0) {
      context.lineWidth = this.lineWidth
      context.strokeStyle = this.lineColor
      context.stroke()
    }

    return this
  }

  withFill (context) {
    if (this.fill) {
      context.fillStyle = this.color
      context.fill()
    }

    return this
  }

  draw (manager) {
    manager.context.beginPath()
    manager.context.rect(this.x, this.y, this.width, this.height)

    this.withLine(manager.context)
    this.withFill(manager.context)

    manager.reset()
    manager.context.closePath()
  }
}

export default Square
