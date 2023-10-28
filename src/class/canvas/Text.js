class Text {
  constructor ({
    text = '',
    x = 0,
    y = 0,
    textAlignment = 'center',
    size = 20,
    font = 'Arial',
    textBaseline = 'middle',
    stroke = false,
    strokeStyle = 'black',
    fillStyle = 'white',
    canvasManager
  }) {
    if (!canvasManager) throw new Error('canvasManager is required')
    this.canvasManager = canvasManager

    this.text = text
    this.x = x
    this.y = y
    this.textAlignment = textAlignment
    this.font = font
    this.textBaseline = textBaseline
    this.stroke = stroke
    this.fillStyle = fillStyle
    this.size = size
    this.strokeStyle = strokeStyle
  }

  setX (x) {
    this.x = x
  }

  setY (y) {
    this.y = y
  }

  get fontFormat () {
    return `${this.size}px ${this.font}`
  }

  setText ({ text }) {
    this.text = text
    return this
  }

  draw () {
    const manager = this.canvasManager
    manager.context.textAlign = this.textAlignment
    manager.context.font = this.fontFormat
    manager.context.textBaseline = this.textBaseline
    manager.context.fillStyle = this.fillStyle
    manager.context.strokeStyle = this.strokeStyle

    this.stroke ? manager.context.strokeText(this.text, this.x, this.y) : manager.context.fillText(this.text, this.x, this.y)
  }
}

export default Text
