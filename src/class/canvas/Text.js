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
    fillStyle = 'white',
    canvasManager,
    module
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
    this.module = module
  }

  get fontFormat () {
    return `${this.size}px ${this.font}`
  }

  setSize (size) {
    this.size = size
    return this
  }

  setText (text) {
    this.text = text
    return this
  }

  setX (x) {
    this.x = x
    return this
  }

  setY (y) {
    this.y = y
    return this
  }

  setTextAlignment (textAlignment) {
    this.textAlignment = textAlignment
    return this
  }

  setFont (font) {
    this.font = font
    return this
  }

  setTextBaseline (textBaseline) {
    this.textBaseline = textBaseline
    return this
  }

  withModule ({ module }) {
    this.module = module
    this.text = module.currentText
    return this
  }

  draw () {
    const manager = this.canvasManager
    manager.context.textAlign = this.textAlignment
    manager.context.font = this.fontFormat
    manager.context.textBaseline = this.textBaseline
    manager.context.fillStyle = this.fillStyle
    this.stroke ? manager.context.strokeText(this.text, this.x, this.y) : manager.context.fillText(this.text, this.x, this.y)
  }
}

export default Text
