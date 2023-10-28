import prop from '@utils/prototypes'
import CanvasManager from '@canvas/CanvasManager'
import CanvasListeners from '@canvas/CanvasListeners'
import colors from '@utils/colors'
import MenuSectionDraw from '@canvas/MenuSectionDraw'
import LeftButtonDraw from '@canvas/LeftButtonDraw'
import Star from '@class/canvas/StarDraw'
import Loading from '@canvas/Loading'
import RightButtonDraw from '@canvas/RightButtonDraw'
import Game from '@game/Game'
import ModuleFactory from '@game/ModuleFactory'
import AudioMaker from '@class/AudioMaker'
import { v4 as uuid } from 'uuid'
import Saves from '@game/Saves'
import GameEvents from '@game/GameEvents'
import gameModuleTypes from '@game/configs/gameModuleTypes'
import CanvasTextFactory from '@canvas/CanvasTextFactory'
import Text from '@canvas/Text'

(async function () {
  let resourcesLoaded = false
  let game = null
  let clickSound = null
  const input = document.querySelector('input')
  const canvasManager = new CanvasManager({
    htmlCanvas: document.getElementById('canvas')
  })
  const canvasTextFactory = new CanvasTextFactory({
    types: gameModuleTypes,
    canvasManager,
    colors
  })
  /****************************/
  /*     Load Basic Resources */
  /****************************/
  Game.getInstace({
    moduleFactory: ModuleFactory,
    saveManager: new Saves({ idGenerator: uuid }),
    eventManager: new GameEvents({ idGenerator: uuid })
  })
    .then((gameInstance) => {
      game = gameInstance
      AudioMaker.load({ url: 'http://sonidosmp3gratis.com/sounds/button-click-off-click.mp3' })
        .then((audio) => {
          clickSound = audio
          resourcesLoaded = true
        })
    })

  /**********************************/
  /*          Items Instances       */
  /**********************************/
  const loading = new Loading({
    canvasManager,
    colors,
    text: new Text({ canvasManager })
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
  const context = canvasManager.context
  const draw = () => {
    requestAnimationFrame(draw)
    canvasManager.clearRect()

    if (!resourcesLoaded) {
      loading.draw()
    } else {
      menuSection.draw()
      leftButton.draw()
      rightButton.draw()

      game.currentModule.play({
        canvasManager,
        canvasTextShower: canvasTextFactory.getInstance({ type: game.currentModule.type })
      })

      starts.forEach((star) => star.move())
    }
  }

  draw()
})()
