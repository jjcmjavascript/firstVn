import Text from '@canvas/Text'
import CanvasTextOptions from '@canvas/CanvasTextOptions'

class CanvasTextFactory {
  constructor ({ types, canvasManager, colors }) {
    this.types = types
    this.canvasManager = canvasManager
    this.colors = colors
  }

  getInstance ({ type }) {
    const canvasTextShower = {
      [this.types.GENERAL]: () => new Text({
        text: '',
        x: this.canvasManager.width * 0.01,
        size: 20,
        y: this.canvasManager.buttonSectionPosition.y + 20,
        fillStyle: this.colors.black,
        textAlignment: 'left',
        canvasManager: this.canvasManager
      }),
      [this.types.OPTIONS]: () => new CanvasTextOptions({
        text: [],
        x: this.canvasManager.width * 0.01,
        size: 20,
        y: this.canvasManager.buttonSectionPosition.y + 20,
        strokeStyle: this.colors.black,
        textAlignment: 'left',
        canvasManager: this.canvasManager,
        stroke: true
      })
    }

    return canvasTextShower[type]()
  }
}

export default CanvasTextFactory
