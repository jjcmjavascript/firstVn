import gameImageRoutes from '@game/configs/gameImageRoutes'

class GameImageSelector {
  static getImagesByName ({ name }) {
    return gameImageRoutes[name] || gameImageRoutes.default
  }
}

export default GameImageSelector
