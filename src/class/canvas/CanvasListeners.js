class CanvasListeners {
  constructor ({ canvas, listeners = new Map() }) {
    this.listeners = listeners
    this.canvas = canvas
  }

  pushListeners ({ name, type, callback }) {
    this.listeners.set(name, {
      type,
      callback
    })
  }

  addListener ({ name, type, callback }) {
    this.pushListeners({ name, type, callback })

    this.canvas.addEventListener(type, callback)
  }

  removeListener ({ name }) {
    const { type, callback } = this.listeners.get(name)
    this.canvas.removeEventListener(type, callback)

    this.listeners.delete(name)
  }
}

export default CanvasListeners
