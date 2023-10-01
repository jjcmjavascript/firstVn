class RightButtonDraw {
  constructor ({ canvasManager, colors }) {
    this.canvasManager = canvasManager
    this.colors = colors
  }

  get initialX () {
    return this.canvasManager.buttonSectionPosition.x + this.canvasManager.buttonSectionPosition.x * 0.05
  }

  get initialY () {
    return this.canvasManager.buttonSectionPosition.y + this.canvasManager.buttonSectionPosition.y * 0.02
  }

  mouseInside ({ clientX, clientY }) {
    const canvasX = clientX - this.canvasManager.canvas.getBoundingClientRect().left
    const canvasY = clientY - this.canvasManager.canvas.getBoundingClientRect().top

    // Coordenadas del área del botón
    const initialX = this.initialX
    const initialY = this.initialY
    const incresePosition = this.canvasManager.buttonSectionPosition.x * 0.02
    const topLeftCoordX = initialX - incresePosition
    const topLeftCoordY = initialY
    const bottomLeftCoordX = initialX + (incresePosition / 2) // divido entre dos para envitar que el botón sea muy grande
    const bottomLeftCoordY = initialY + incresePosition * 2

    // Usar un algoritmo de punto dentro del polígono (triángulo)
    const pointInside = (canvasX >= topLeftCoordX && canvasX <= bottomLeftCoordX &&
                         canvasY >= topLeftCoordY && canvasY <= bottomLeftCoordY)

    return pointInside
  }

  draw () {
    const ctx = this.canvasManager.context
    const initialX = this.initialX
    const initialY = this.initialY
    const incresePosition = this.canvasManager.buttonSectionPosition.x * 0.02

    ctx.beginPath()
    ctx.moveTo(initialX, initialY + incresePosition)
    ctx.lineTo(initialX - incresePosition, initialY)
    ctx.lineTo(initialX - incresePosition, initialY + incresePosition * 2)
    ctx.lineTo(initialX, initialY + incresePosition)

    ctx.strokeStyle = this.colors.siverTwo
    ctx.lineWidth = 1
    ctx.fillStyle = this.colors.purpleThree
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
  }
}

export default RightButtonDraw
