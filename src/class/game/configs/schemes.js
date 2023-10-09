import moduleType from '@game/configs/gameModuleTypes'
import moduleNames from '@game/configs/gameModuleNames'

export default {
  [moduleNames.INITIAL]: {
    id: 1,
    type: moduleType.GENERAL,
    texts: moduleNames.INITIAL,
    images: 'INITIAL_IMAGES',
    song: null,
    next: 2,
    prev: null
  },
  [moduleNames.I_WANT_TO_LIVE]: {
    id: 2,
    type: moduleType.OPTIONS,
    texts: null,
    images: 'INITIAL_IMAGES',
    song: null,
    next: null,
    prev: 1
  },
  [moduleNames.GETING_OUT]: {
    id: 3,
    type: moduleType.GENERAL,
    texts: moduleNames.GETING_OUT,
    images: 'INITIAL_IMAGES_TWO',
    song: 'DOOR',
    next: null,
    prev: null
  },
  [moduleNames.GO_TO_HELL_ONE]: {
    id: 4,
    type: moduleType.GO_TO_HELL_ONE,
    texts: moduleType.GO_TO_HELL_ONE,
    images: 'INITIAL_IMAGES',
    song: null,
    next: null,
    prev: 1
  }
}
