class ModuleImages {
  /**
   * Array of images in order to be loaded and used in the game
   * @param {Object} params
   * @param {Array[Object]} params.objects
   * @param {Array[0].url} params.objects.url
   * @param {Array[0].x} params.objects.x
   * @param {Array[0].y} params.objects.y
   * @param {Array[0].width} params.objects.width
   * @param {Array[0].height} params.objects.height
   */
  constructor ({ urls }) {
    this.urls = urls
    this.images = []
  }

  async load ({ urls, loader }) {
    const promisesResults =
      await Promise.all(Object.values(urls).map(imageOptionObject => loader.load({ url: imageOptionObject.url })))

    promisesResults.forEach((imageResult, i) =>
      this.images.push({
        image: imageResult,
        x: urls[i].x,
        y: urls[i].y,
        width: urls[i].width,
        height: urls[i].height
      }))
  }

  async play ({ canvasManager }) {
    this.images.forEach((image) => {
      canvasManager.insertImage({
        image: image.image,
        x: image.x,
        y: image.y,
        width: image.width,
        height: image.height
      })
    })
  }

  static async getInstace ({ urls, loader }) {
    const instance = new ModuleImages({ urls: [], loader })
    await instance.load({ urls, loader })

    return instance
  }
}

export default ModuleImages
