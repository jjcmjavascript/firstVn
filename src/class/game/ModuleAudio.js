class ModuleAudio {
  /**
   * @param {Object} params
   * @param {String} params.url
   * @param {AudioMaker} params.loader
   */
  constructor ({ url, loader }) {
    this.urls = url
    this.song = null
    this.executed = false
  }

  async load ({ url, loader }) {
    this.song = await loader.load({ url })
  }

  async execute () {
    console.log(this)
  }

  static async getInstace ({ url, loader }) {
    const instance = new ModuleAudio({ url: null, loader })
    await instance.load({ url, loader })

    return instance
  }

  play () {
    if (!this.executed && this.song.paused) {
      this.song.play()
      this.executed = true
    }
  }

  stop () {
    this.song.pause()
    this.song.currentTime = 0
  }
}

export default ModuleAudio
