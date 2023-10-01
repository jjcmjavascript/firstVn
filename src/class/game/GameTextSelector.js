import historyText from '@game/configs/gameHistoryText'
import generalText from '@game/configs/generalText'

class GameTextSelector {
  static getHistoryTextByName ({ name, params }) {
    return historyText[name](params)
  }

  static getGeneralTextByName ({ name, params }) {
    return generalText[name](params)
  }
}

export default GameTextSelector
