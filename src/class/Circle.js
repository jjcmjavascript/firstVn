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
    lineWidth = 1
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

  withFill (context) {
    if (this.fill) {
      context.fillStyle = this.color
      context.fill()
    }

    return this
  }

  withStroke (context) {
    if (this.lineWidth > 0) {
      context.lineWidth = this.lineWidth
      context.strokeStyle = this.color
      context.stroke()
    }

    return this
  }

  draw (context) {
    context.beginPath()
    context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise)

    this.withFill(context).withStroke(context)
    context.closePath()
  }
}

export default Circle
