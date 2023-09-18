import Game from '@game/Game'
import { canvasManager } from '@class/CanvasManager'
import Circle from '@class/Circle'
import Square from '@class/Square'
import ImageMaker from '@class/ImageMaker'

(async function () {
  const game = new Game()
  const image = await ImageMaker.getImage({ url: 'https://www.pngall.com/wp-content/uploads/1/Forest-PNG-HD.png' })

  canvasManager.insertImage({
    image,
    x: 20,
    y: 20,
    ...canvasManager.gameSectionDimesions
  })

  const circle = new Circle({
    ...canvasManager.buttonSectionPosition,
    radius: 20,
    lineWidth: 2,
    lineColor: 'red'
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
    fill: true,
    color: 'yellow'
  })

  circle.draw(canvasManager)
  circle2.draw(canvasManager)
  square.draw(canvasManager)
  square2.draw(canvasManager)
  console.log(game)
})()
