class CanvasManager {
  constructor ({ htmlCanvas = null }) {
    this.canvas = htmlCanvas
    this.context = this.canvas.getContext('2d')
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
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

  get buttonSectionPosition () {
    return {
      x: this.canvas.width * 0.8,
      y: this.gameSectionDimesions.height
    }
  }

  insertImage ({ image, x = 0, y = 0, width = 0, height = 0 }) {
    this.context.drawImage(image, x, y, width, height)
  }

  insertMainImage ({ image }) {
    this.context.drawImage(image, 0, 0, this.gameSectionDimesions.width, this.gameSectionDimesions.height)
  }

  reset () {
    this.context.lineWidth = 0
    this.context.fillStyle = 'black'
    this.context.strokeStyle = 'black'
    this.context.moveTo(0, 0)
  }

  clearRect () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
}

export default CanvasManager
