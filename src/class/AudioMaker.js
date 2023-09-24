class AudioMaker {
  static load ({ url }) {
    return new Promise((resolve, reject) => {
      try {
        const audio = new Audio()
        audio.src = url
        audio.oncanplaythrough = () => {
          resolve(audio)
        }
        audio.onerror = (err) => {
          reject(new Error(`Audio: ${err}`))
        }
      } catch (err) {
        reject(new Error(`Audio: ${err}`))
      }
    })
  }
}

export default AudioMaker
