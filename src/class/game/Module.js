class Module {
  /**
   * @param {*} param
   * @param {int} param.id
   * @param {String} param.name
   * @param {ModuleSong} param.song
   * @param {ModuleTexts} param.texts
   * @param {ModuleImages} param.images
   * @param {Array[String]} param.executionOrder
   */
  constructor ({ id, images, name, song, texts, next, prev, executionOrder = ['images', 'song', 'texts'] }) {
    if (!name) throw new Error('name is required')
    this.name = name

    if (!id) throw new Error('id is required')
    this.id = id

    this.images = images
    this.song = song
    this.texts = texts
    this.executionOrder = executionOrder
    this.auto()
    this.next = next
    this.prev = prev
  }

  auto () {
    this.song?.play()
  }

  stop () {
    this.song?.stop()
  }

  get currentImages () {
    return this.images?.images || []
  }

  get currentTexts () {
    return this.texts?.texts || []
  }

  get currentText () {
    return this.texts?.currentText
  }

  getCurrentSong () {
    return this.song?.song
  }

  async execute () {

  }
}

export default Module
