import Game from '@game/Game'
import { canvasManager } from '@class/CanvasManager'
import Circle from '@class/Circle'
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
    lineWidth: 5,
    color: 'red'
  })

  const otherCircle = new Circle({
    x: canvasManager.buttonSectionPosition.x + 100,
    y: canvasManager.buttonSectionPosition.y,
    radius: 20,
    lineWidth: 5,
    color: 'blue'
  })

  circle.draw(canvasManager.context)
  otherCircle.draw(canvasManager.context)
  console.log(game)
})()
