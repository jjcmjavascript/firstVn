class MenuSectionDraw {
  constructor ({ canvasManager, colors, elements = [] }) {
    this.canvasManager = canvasManager
    this.colors = colors
    this.elements = []
  }

  draw () {
    const ctx = this.canvasManager.context
    const colors = this.colors
    const height = this.canvasManager.height
    const gameSectionDimesions = this.canvasManager.gameSectionDimesions

    // Traza las lineas del menu
    ctx.beginPath()
    ctx.moveTo(0, gameSectionDimesions.height)
    ctx.lineTo(gameSectionDimesions.width, gameSectionDimesions.height)
    ctx.lineTo(gameSectionDimesions.width, height)
    ctx.lineTo(0, height)
    ctx.lineTo(0, gameSectionDimesions.height)
    ctx.fillStyle = colors.silver
    // Llena el menu
    ctx.fill()
    // Colorea el borde del menu
    ctx.strokeStyle = colors.silverThree
    ctx.lineWidth = 5
    ctx.stroke()
  }
}

export default MenuSectionDraw
