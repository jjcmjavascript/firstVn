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
    radius = 0,
    text = null
  }) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
    this.lineWidth = lineWidth
    this.fill = fill
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

  withLine (manager) {
    if (this.lineWidth > 0) {
      manager.context.lineWidth = this.lineWidth
      manager.context.strokeStyle = this.lineColor
      manager.context.stroke()
    }

    return this
  }

  withFill (manager) {
    if (this.fill) {
      manager.context.fillStyle = this.color
      manager.context.fill()
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
    manager.context.rect(this.x, this.y, this.width, this.height)

    this.withLine(manager)
    this.withFill(manager)
    this.withText(manager, this.x, this.y)

    manager.reset()
    manager.context.closePath()
  }
}

export default Square
