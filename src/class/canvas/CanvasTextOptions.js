import Text from '@canvas/Text'

class CanvasTextOptions extends Text {
  constructor ({
    text = '',
    x = 0,
    y = 0,
    textAlignment = 'center',
    size = 20,
    font = 'Arial',
    textBaseline = 'middle',
    stroke = false,
    fillStyle = 'white',
    canvasManager,
    module
  }) {
    super({ text, x, y, textAlignment, size, font, textBaseline, stroke, fillStyle, canvasManager, module })
  }
}
