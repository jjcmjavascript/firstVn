import moduleNames from '@game/configs/gameModuleNames'

export const INITIAL = (params) => [
  'Abre sus ojos...',
  'donde estoy? solo recuerdo que estaba en medio de [...]',
  'y ahora estoy en un lugar desconocido'
]

export const GETING_OUT = (params) => [
  'debo encontrar la salida'
]

export const GO_TO_HELL_ONE = (params) => [
  'estoy en el infierno'
]

export default {
  [moduleNames.INITIAL]: INITIAL,
  [moduleNames.GETING_OUT]: GETING_OUT,
  [moduleNames.GO_TO_HELL_ONE]: GO_TO_HELL_ONE
}
