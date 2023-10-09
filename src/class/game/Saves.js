class Saves {
  constructor ({ idGenerator }) {
    if (typeof idGenerator !== 'function') {
      throw new Error('idGenerator is not a function')
    }
    this.idGenerator = idGenerator

    this.list = new Map()
    this.createStorage()
    this.loadLocalSave()
  }

  createStorage () {
    if (!localStorage.getItem('saves')) {
      localStorage.setItem('saves', JSON.stringify({}))
    }
  }

  loadLocalSave () {
    const result = JSON.parse(localStorage.getItem('saves')) || {}
    const parsedData = this.parse({ data: result })

    this.list = parsedData
  }

  saveLocalSave () {
    localStorage.setItem('saves', JSON.stringify(Object.fromEntries(this.list)))
  }

  parse ({ data }) {
    return new Map(Object.entries(data))
  }

  save ({ name, data }) {
    const id = this.idGenerator()
    this.list.set(id, { name, data })
  }

  load ({ id }) {
    return this.list.get(id)
  }

  persist ({ name, data }) {
    this.save({ name, data })
    this.saveLocalSave()
  }
}

export default Saves
