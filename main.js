import Game from '@game/Game'
import { canvasManager } from '@class/CanvasManager'
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

  console.log(game)
})()
