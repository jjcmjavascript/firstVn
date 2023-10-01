import Module from '@game/Module'
import ModuleAudio from '@game/ModuleAudio'
import ModuleImages from '@game/ModuleImages'
import ModuleTexts from '@game/ModuleTexts'
import GameTextSelector from '@game/GameTextSelector'
import GameImageSelector from '@game/GameImageSelector'
import GameAudioSelector from '@game/GameAudioSelector'
import ImageMaker from '@class/ImageMaker'
import AudioMaker from '@class/AudioMaker'
import schemes from '@game/configs/schemes'

class ModuleFactory {
  static async build ({ id, params = {} }) {
    const scheme = schemes.find((module) => module.id === id)
    const textsResult = scheme.texts
      ? GameTextSelector.getHistoryTextByName({ name: scheme.texts, params })
      : null
    const imagesResult = scheme.images
      ? await GameImageSelector.getImagesByName({ name: scheme.images, params })
      : null
    const songResult = scheme.song
      ? GameAudioSelector.getAudioByName({ name: scheme.song, params })
      : null

    const texts = textsResult ? await ModuleTexts.getInstace({ texts: textsResult }) : null
    const images = imagesResult ? await ModuleImages.getInstace({ urls: imagesResult, loader: ImageMaker }) : null
    const song = songResult ? await ModuleAudio.getInstace({ url: songResult, loader: AudioMaker }) : null

    return new Module({
      ...scheme,
      song,
      images,
      texts
    })
  }
}

export default ModuleFactory
