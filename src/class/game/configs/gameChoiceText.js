import moduleNames from '@game/configs/gameModuleNames'
import schemes from '@game/configs/schemes'

const I_WANT_TO_LIVE = {
  text: [
    'Quieres vivir esta aventura?'
  ],
  options: [
    { text: 'Si', next: schemes[moduleNames.GETING_OUT].id },
    { text: 'No', next: schemes[moduleNames.GO_TO_HELL_ONE].id }
  ]
}

export default {
  [moduleNames.I_WANT_TO_LIVE]: I_WANT_TO_LIVE
}
