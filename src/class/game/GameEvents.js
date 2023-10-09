class GameEvents {
  constructor ({ idGenerator }) {
    this.idGenerator = idGenerator
    this.events = new Map()
  }

  add ({ name, callback }) {
    const id = this.idGenerator
    this.events.set(id, { name, callback })
  }
}

export default GameEvents
