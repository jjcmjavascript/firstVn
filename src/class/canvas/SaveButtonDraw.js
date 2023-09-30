class SaveButtonDraw {
  constructor ({ canvasManager, colors }) {
    this.canvasManager = canvasManager
    this.colors = colors
  }

  get initialX () {
    return this.canvasManager.buttonSectionPosition.x + this.canvasManager.buttonSectionPosition.x * 0.2
  }

  get initialY () {
    return this.canvasManager.buttonSectionPosition.y + this.canvasManager.buttonSectionPosition.y * 0.02
  }

  draw () {

  }
}
