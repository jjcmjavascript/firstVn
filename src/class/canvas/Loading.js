class Loading {
  constructor ({ canvasManager, colors, text }) {
    this.canvasManager = canvasManager
    this.colors = colors
    this.text = text
  }

  setText (text) {
    this.text = text
  }

  withText () {
    if (this.text) {
      this.text.setX(this.canvasManager.width / 2)
      this.text.setY(this.canvasManager.height / 2)
      this.text.draw()
    }
  }

  draw () {
    const ctx = this.canvasManager.context

    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(this.canvasManager.width, 0)
    ctx.lineTo(this.canvasManager.width, this.canvasManager.height)
    ctx.lineTo(0, this.canvasManager.height)
    ctx.lineTo(0, 0)
    ctx.fillStyle = this.colors.black
    ctx.fill()

    this.withText()

    ctx.closePath()
  }
}

export default Loading
