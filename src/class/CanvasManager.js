class CanvasManager {
  constructor () {
    this.canvas = document.getElementById('canvas')
    this.context = this.canvas.getContext('2d')
    this.canvas.width = window.innerWidth * 0.9
    this.canvas.height = window.innerHeight * 0.9
  }

  get height () {
    return this.canvas.height
  }

  get width () {
    return this.canvas.width
  }

  get gameSectionDimesions () {
    return {
      width: this.canvas.width,
      height: this.canvas.height * 0.7
    }
  }

  get menuSectionDimesions () {
    return {
      width: this.canvas.width,
      height: this.canvas.height * 0.3
    }
  }

  insertImage ({ image, x = 0, y = 0, width = 0, height = 0 }) {
    this.context.drawImage(image, x, y, width, height)
  }
}

export const canvasManager = new CanvasManager()
