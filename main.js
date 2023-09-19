import Game from '@game/Game'
import canvasManager from '@canvas/CanvasManager'
import Circle from '@canvas/Circle'
import Square from '@canvas/Square'
import ImageMaker from '@class/ImageMaker'
import Text from '@canvas/Text'

(async function () {
  const game = new Game()
  const image = await ImageMaker.getImage({ url: 'https://www.pngall.com/wp-content/uploads/1/Forest-PNG-HD.png' })

  canvasManager.insertMainImage({ image })

  const helloText = new Text({
    text: 'Hola bb'
  })

  const circle = new Circle({
    ...canvasManager.buttonSectionPosition,
    radius: 20,
    lineWidth: 2,
    lineColor: 'red',
    text: helloText
  })

  const circle2 = new Circle({
    x: canvasManager.buttonSectionPosition.x + 100,
    y: canvasManager.buttonSectionPosition.y,
    radius: 20,
    fill: true,
    color: 'blue'
  })

  const square = new Square({
    ...canvasManager.buttonSectionPosition,
    width: 50,
    height: 50,
    fill: true,
    color: 'green'
  })

  const square2 = new Square({
    x: canvasManager.buttonSectionPosition.x + 100,
    y: canvasManager.buttonSectionPosition.y,
    width: 50,
    height: 50,
    lineWidth: 2,
    lineColor: 'yellow',
    text: helloText
  })

  circle.draw(canvasManager)
  circle2.draw(canvasManager)
  square.draw(canvasManager)
  square2.draw(canvasManager)
  console.log(game)
})()
