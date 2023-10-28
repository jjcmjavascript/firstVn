class Module {
  /**
   * @param {*} param
   * @param {int} param.id
   * @param {ModuleSong} param.song
   * @param {ModuleTexts} param.texts
   * @param {ModuleImages} param.images
   * @param {Array[String]} param.executionOrder
   */
  constructor ({ id, images, song, texts, next, prev, type, executionOrder = ['images', 'song', 'texts'] }) {
    if (!id) throw new Error('id is required')
    this.id = id

    if (!type) throw new Error('type is required')
    this.type = type

    this.images = images
    this.song = song
    this.texts = texts
    this.executionOrder = executionOrder
    this.next = next
    this.prev = prev
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

  async play ({
    canvasManager,
    canvasTextShower
  }) {
    this.song?.play()
    this.images?.play({
      canvasManager
    })
    this.texts?.play({
      canvasTextShower
    })
  }

  prevModule () {
    if (this.texts && !this.texts?.isBegining) {
      this.texts.prev()
      return
    }

    return this.prev
  }
}

export default Module
