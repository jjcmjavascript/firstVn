class LeftButtonDraw {
  constructor ({ canvasManager, colors }) {
    this.canvasManager = canvasManager
    this.colors = colors
  }

  get initialX () {
    return this.canvasManager.buttonSectionPosition.x
  }

  get initialY () {
    return this.canvasManager.buttonSectionPosition.y + this.canvasManager.buttonSectionPosition.y * 0.02
  }

  mouseInside ({ clientX, clientY }) {
    const canvasX = clientX - this.canvasManager.canvas.getBoundingClientRect().left
    const canvasY = clientY - this.canvasManager.canvas.getBoundingClientRect().top

    // Coordenadas del área del botón triangular
    const initialX = this.initialX
    const initialY = this.initialY
    const incresePosition = this.canvasManager.buttonSectionPosition.x * 0.02

    // Usar un algoritmo de punto dentro del polígono (triángulo)
    const pointInside = (canvasX >= initialX && canvasX <= initialX + incresePosition &&
                         canvasY >= initialY && canvasY <= initialY + incresePosition)

    return pointInside
  }

  draw () {
    const ctx = this.canvasManager.context
    const initialX = this.initialX
    const initialY = this.initialY
    const incresePosition = this.canvasManager.buttonSectionPosition.x * 0.02

    ctx.beginPath()
    ctx.moveTo(initialX, initialY + incresePosition)
    ctx.lineTo(initialX + incresePosition, initialY)
    ctx.lineTo(initialX + incresePosition, initialY + incresePosition * 2)
    ctx.lineTo(initialX, initialY + incresePosition)

    ctx.strokeStyle = this.colors.siverTwo
    ctx.lineWidth = 1
    ctx.fillStyle = this.colors.purpleThree
    ctx.stroke()
    ctx.fill()
    ctx.closePath()
  }
}

export default LeftButtonDraw
