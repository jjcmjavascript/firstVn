import prototypes from '@utils/prototypes'
import CanvasManager from '@canvas/CanvasManager'
import CanvasListeners from '@canvas/CanvasListeners'
import colors from '@utils/colors'
import MenuSectionDraw from '@canvas/MenuSectionDraw'
import LeftButtonDraw from '@canvas/LeftButtonDraw'
import Star from '@class/canvas/StarDraw'
import Text from '@canvas/Text'
import Loading from '@canvas/Loading'
import RightButtonDraw from '@canvas/RightButtonDraw'
import Game from '@game/Game'
import ModuleFactory from '@game/ModuleFactory'
import AudioMaker from '@class/AudioMaker'
import { v4 as uuid } from 'uuid'
import Saves from '@game/Saves'
import Events from '@game/Events'

(async function () {
  let resourcesLoaded = false
  let game = null
  let clickSound = null
  const input = document.querySelector('input')
  const canvasManager = new CanvasManager({
    htmlCanvas: document.getElementById('canvas')
  })

  /****************************/
  /*     Load Basic Resources */
  /****************************/
  Game.getInstace({
    moduleFactory: ModuleFactory,
    saves: new Saves({ idGenerator: uuid }),
    events: new Events({ idGenerator: uuid })
  })
    .then((gameInstance) => {
      game = gameInstance
      AudioMaker.load({ url: 'http://sonidosmp3gratis.com/sounds/button-click-off-click.mp3' })
        .then((audio) => {
          clickSound = audio
          resourcesLoaded = true
        })
    })

  // sections and items
  const loading = new Loading({
    canvasManager,
    colors,
    text: new Text({
    })
  })
  const menuSection = new MenuSectionDraw({ canvasManager, colors })
  const leftButton = new LeftButtonDraw({ canvasManager, colors })
  const rightButton = new RightButtonDraw({ canvasManager, colors })
  const starts = new Array(30).fill(0).map(() => new Star({
    canvasManager,
    x: Math.random() * canvasManager.width,
    speed: (Math.random() * 4) + 2
  }))

  /**********************************/
  /*          Listeners             */
  /**********************************/
  const canvasListeners = new CanvasListeners({
    canvas: canvasManager.canvas
  })

  canvasListeners.addListener({
    name: 'mousemove',
    type: 'mousemove',
    callback: function (event) {
      input.value = `X: ${event.clientX - canvasManager.canvas.getBoundingClientRect().left} Y: ${event.clientY - canvasManager.canvas.getBoundingClientRect().top}`
    }
  })

  canvasListeners.addListener({
    name: 'click',
    type: 'click',
    callback: async function (event) {
      if (leftButton.mouseInside({
        clientX: event.clientX,
        clientY: event.clientY
      })) {
        clickSound.pause()
        clickSound.currentTime = 0
        clickSound.play()
        await game.prevModule()
      }

      if (rightButton.mouseInside({
        clientX: event.clientX,
        clientY: event.clientY
      })) {
        clickSound.pause()
        clickSound.currentTime = 0
        clickSound.play()
        await game.nextModule()
      }
    }
  })

  /**********************************/
  /*          Main Loop             */
  /*          Draw                  */
  /**********************************/
  let text = null
  const context = canvasManager.context
  const draw = () => {
    requestAnimationFrame(draw)
    canvasManager.clearRect()

    if (!resourcesLoaded) {
      loading.draw()
    } else {
      const currentModuleImages = game.currentModule.currentImages
      const currentModuleTexts = game.currentModule.currentTexts
      const currentModuleText = game.currentModule.currentText

      if (!text || (text && text.text !== currentModuleText)) {
        text = new Text({
          text: currentModuleText,
          x: canvasManager.width * 0.01,
          size: 20,
          y: canvasManager.buttonSectionPosition.y + 20,
          fillStyle: colors.black,
          textAlignment: 'left'
        })
      }

      menuSection.draw()
      leftButton.draw()
      rightButton.draw()

      currentModuleImages.forEach((image, i) => {
        canvasManager.insertImage({
          image: image.image,
          x: image.x,
          y: image.y,
          width: image.width,
          height: image.height
        })
      })

      starts.forEach((star) => star.move())

      text && text.draw({ manager: canvasManager })
    }
  }

  draw()
})()
