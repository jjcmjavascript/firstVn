import Text from '@canvas/Text'
class CanvasTextOptions extends Text {
  constructor ({
    text = [],
    x = 0,
    y = 0,
    textAlignment = 'center',
    size = 20,
    font = 'Arial',
    textBaseline = 'middle',
    stroke = false,
    fillStyle = 'white',
    canvasManager,
    strokeStyle
  }) {
    super({ text, x, y, textAlignment, size, font, textBaseline, stroke, fillStyle, canvasManager, strokeStyle })
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

    this.text.forEach((text, index) => {
      const marginTop = index === 0 ? 0 : index * this.size + (index * manager.height * 0.02)

      this.stroke
        ? manager.context.strokeText(text, this.x, this.y + marginTop)
        : manager.context.fillText(text, this.x, this.y + marginTop)
    })
  }
}

export default CanvasTextOptions
