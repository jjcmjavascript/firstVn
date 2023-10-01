import gameAudioRoutes from '@game/configs/gameAudioRoutes'

class GameAudioSelector {
  static getAudioByName ({ name }) {
    return gameAudioRoutes[name]
  }
}

export default GameAudioSelector
