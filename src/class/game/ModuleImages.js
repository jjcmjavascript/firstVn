class ModuleImages {
  /**
   * Array of images in order to be loaded and used in the game
   * @param {Object} params
   * @param {Array[Object]} params.objects
   * @param {Array[0].url} params.objects.url
   * @param {Array[0].x} params.objects.x
   * @param {Array[0].y} params.objects.y
   * @param {AudioMaker} params.loader
   */
  constructor ({ urls, loader }) {
    this.urls = urls

    /**
     * @type {Array[Objects]}
     * @property {String} image
     * @property {Number} x
     * @property {Number} y
     */
    this.images = []
  }

  async load ({ urls, loader }) {
    let i = 0
    const length = urls.length
    while (i < length) {
      const image = await loader.load({ url: urls[i].url })
      this.images.push({
        image,
        x: urls[i].x,
        y: urls[i].y,
        width: urls[i].width,
        height: urls[i].height
      })
      i++
    }
  }

  async execute () {
    console.log(this)
  }

  static async getInstace ({ urls, loader }) {
    const instance = new ModuleImages({ urls: [], loader })
    await instance.load({ urls, loader })

    return instance
  }
}

export default ModuleImages
