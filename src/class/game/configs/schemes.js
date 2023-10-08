export const moduleType = {
  general: Symbol('general'),
  battle: Symbol('battle'),
  options: Symbol('options')
}

export default [
  {
    id: 1,
    name: 'initialOne',
    type: moduleType.general,
    texts: 'INITIAL_TEXT',
    images: 'INITIAL_IMAGES',
    song: null,
    next: 2,
    prev: null
  },
  {
    id: 2,
    name: 'initialTwo',
    type: moduleType.general,
    texts: 'INITIAL_TEXT_2',
    images: 'INITIAL_IMAGES_TWO',
    song: 'DOOR',
    next: null,
    prev: 1
  }
]
