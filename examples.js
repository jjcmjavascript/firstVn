import Circle from '@canvas/Circle'
import Square from '@canvas/Square'
import Text from '@canvas/Text'
import CanvasManager from '@canvas/CanvasManager'

const canvasManager = new CanvasManager({
  htmlCanvas: document.getElementById('canvas')
})

// how create text
const helloText = new Text({
  text: 'Hola bb'
})

// how create circle with line
const circle = new Circle({
  ...canvasManager.buttonSectionPosition,
  radius: 20,
  lineWidth: 2,
  lineColor: 'red'
})

// how create circle with fill
const circle2 = new Circle({
  x: canvasManager.buttonSectionPosition.x + 100,
  y: canvasManager.buttonSectionPosition.y,
  radius: 20,
  fill: true,
  color: 'blue'
})

// how create square with line
const square = new Square({
  ...canvasManager.buttonSectionPosition,
  width: 50,
  height: 50,
  fill: true,
  color: 'green'
})

// how create square with fill
const square2 = new Square({
  x: canvasManager.buttonSectionPosition.x + 100,
  y: canvasManager.buttonSectionPosition.y,
  width: 50,
  height: 50,
  lineWidth: 2,
  lineColor: 'yellow',
  text: helloText
})

// how draw objects
circle.draw(canvasManager)
circle2.draw(canvasManager)
square.draw(canvasManager)
square2.draw(canvasManager)
