class StartDraw {
  constructor ({ canvasManager, colors, x, y = 0, speed = 1 }) {
    this.canvasManager = canvasManager
    this.colors = colors
    this.x = x
    this.y = y
    this.speed = speed
  }

  draw () {
    const canvas = this.canvasManager.canvas
    const ctx = this.canvasManager.context
    ctx.fillStyle = '#6ab150'
    ctx.lineWidth = 2
    const X = this.x
    const Y = this.y
    const R = 25
    const L = 5
    const paso = 2
    const estrella = L / paso
    const rad = (2 * Math.PI) / estrella

    ctx.beginPath()

    for (let i = 0; i < L; i++) {
      const x = X + R * Math.cos(rad * i)
      const y = Y + R * Math.sin(rad * i)
      ctx.lineTo(x, y)
    }

    ctx.closePath()
    ctx.stroke()
    ctx.fill()
  }

  move () {
    this.y += this.speed
    if (this.y > this.canvasManager.gameSectionDimesions.height + 50) {
      this.y = 0
      this.x = Math.random() * this.canvasManager.width
    }

    this.draw()
  }
}

export default StartDraw
