import Module from '@game/Module'
import ModuleAudio from '@game/ModuleAudio'
import ModuleImages from '@game/ModuleImages'
import ModuleTexts from '@game/ModuleTexts'
import GameTextSelector from '@game/GameTextSelector'
import GameImageSelector from '@game/GameImageSelector'
import GameAudioSelector from '@game/GameAudioSelector'
import ImageMaker from '@class/ImageMaker'
import AudioMaker from '@class/AudioMaker'

export const moduleType = {
  general: Symbol('general'),
  battle: Symbol('battle'),
  options: Symbol('options')
}

export const schemes = [
  {
    id: 1,
    name: 'initialOne',
    type: moduleType.general,
    texts: 'INITIAL_TEXT',
    images: 'INITIAL_IMAGES',
    song: 'HIMNO',
    next: 2,
    prev: null
  },
  {
    id: 2,
    name: 'initialTwo',
    type: moduleType.general,
    texts: 'INITIAL_TEXT_2',
    images: 'INITIAL_IMAGES_TWO',
    song: 'DOOR',
    next: null,
    prev: 1
  }
]

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
