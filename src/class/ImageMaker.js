class ImageMaker {
  static load ({ url }) {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.src = url
      img.onload = () => {
        resolve(img)
      }
      img.onerror = (err) => {
        reject(new Error(`ImageMaker: ${err}`))
      }
    })
  }
}

export default ImageMaker
