import CanvasManager from '@canvas/CanvasManager'
import CanvasListeners from '@canvas/CanvasListeners'
import ImageMaker from '@class/ImageMaker'
import AudioMaker from '@class/AudioMaker'
import colors from '@utils/colors'
import MenuSectionDraw from '@canvas/MenuSectionDraw'
import LeftButtonDraw from '@canvas/LeftButtonDraw'
import Star from '@class/canvas/StarDraw'
import Text from '@canvas/Text'
import Loading from '@canvas/Loading'
import RightButtonDraw from '@canvas/RightButtonDraw'

(async function () {
  let resourcesLoaded = false
  let images = []
  let audios = []
  const input = document.querySelector('input')
  const canvasManager = new CanvasManager({
    htmlCanvas: document.getElementById('canvas')
  })

  /****************************/
  /*     Load Basic Resources */
  /****************************/
  Promise.all([
    ImageMaker.load({ url: 'https://www.pngall.com/wp-content/uploads/1/Forest-PNG-HD.png' }),
    ImageMaker.load({ url: 'https://www.cedior.com/wp-content/uploads/2018/09/pollo-uva.jpg' }),
    AudioMaker.load({ url: 'http://www.sonidosmp3gratis.com/sounds/Door_Open_With_Squeak_02_Sound_Effect_Mp3_136.mp3' })
  ])
    .then((result) => {
      resourcesLoaded = true
      images = result.slice(0, 2)
      audios = result.slice(2)
    })
    .catch((err) => {
      resourcesLoaded = false
      console.error(err)
    })

  // sections and items
  const loading = new Loading({
    canvasManager,
    colors,
    text: new Text({
      text: 'Cargando...'
    })
  })
  const menuSection = new MenuSectionDraw({ canvasManager, colors })
  const leftButton = new LeftButtonDraw({ canvasManager, colors })
  const rightButtonDraw = new RightButtonDraw({ canvasManager, colors })
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
    name: 'previous',
    type: 'mousemove',
    callback: function (event) {
      const result = leftButton.mouseInside({
        clientX: event.clientX,
        clientY: event.clientY
      })

      input.value = `X: ${event.clientX - canvasManager.canvas.getBoundingClientRect().left} Y: ${event.clientY - canvasManager.canvas.getBoundingClientRect().top}`
    }
  })

  /**********************************/
  /*          Main Loop             */
  /*          Draw                  */
  /**********************************/
  const ctx = canvasManager.context
  const draw = () => {
    requestAnimationFrame(draw)
    canvasManager.clearRect()

    if (!resourcesLoaded) {
      loading.draw()
    } else {
      canvasManager.insertMainImage({ image: images[0] })
      starts.forEach((star) => star.move())

      menuSection.draw()
      leftButton.draw()
      rightButtonDraw.draw()
    }
  }

  draw()
})()
