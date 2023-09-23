class Circle {
  constructor ({
    x = 0,
    y = 0,
    radius = 0,
    startAngle = 0,
    endAngle = 2 * Math.PI,
    anticlockwise = false,
    fill = false,
    color = 'black',
    lineWidth = 1,
    lineColor = 'black',
    text = null

  }) {
    this.x = x
    this.y = y
    this.radius = radius
    this.startAngle = startAngle
    this.endAngle = endAngle
    this.anticlockwise = anticlockwise
    this.lineWidth = lineWidth
    this.fill = fill
    this.color = color
    this.lineColor = lineColor
    this.text = text
  }

  setX (x) {
    this.x = x
    return this
  }

  setY (y) {
    this.y = y
    return this
  }

  setRadius (radius) {
    this.radius = radius
    return this
  }

  setStartAngle (startAngle) {
    this.startAngle = startAngle
    return this
  }

  setEndAngle (endAngle) {
    this.endAngle = endAngle
    return this
  }

  setAnticlockwise (anticlockwise) {
    this.anticlockwise = anticlockwise
    return this
  }

  setFill (fill) {
    this.fill = fill
    return this
  }

  setColor (color) {
    this.color = color
    return this
  }

  setText (text) {
    this.text = text
    return this
  }

  withFill (manager) {
    if (this.fill) {
      manager.context.fillStyle = this.color
      manager.context.fill()
    }

    return this
  }

  withLine (manager) {
    if (this.lineWidth > 0) {
      manager.context.lineWidth = this.lineWidth
      manager.context.strokeStyle = this.lineColor
      manager.context.stroke()
    }

    return this
  }

  withText (manager, x, y) {
    if (this.text) {
      x && this.text.setX(x)
      y && this.text.setY(y)
      this.text.draw(manager)
    }

    return this
  }

  draw (manager) {
    manager.context.beginPath()
    manager.context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise)

    this.withFill(manager).withLine(manager).withText(manager, this.x, this.y)

    manager.reset()
    manager.context.closePath()
  }

  move ({ manager, x, y }) {
    this.x += x
    this.y += y
    this.draw(manager)
  }
}

export default Circle
