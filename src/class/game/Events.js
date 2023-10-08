class Events {
  constructor ({ idGenerator }) {
    this.idGenerator = idGenerator
    this.events = new Map()
  }

  add (name, callback) {
    const id = this.idGenerator
    this.events.set(id, { name, callback })
  }

  removeById ({ id }) {
    this.events.delete(id)
  }

  removeByName ({ name }) {
    console.log(2)
  }
}

export default Events
