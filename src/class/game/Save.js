class Save {
  /**
   * @param {Object} param
   * @param {String} param.name
   * @param {Module} param.module
   */
  constructor ({ id, name, module }) {
    this.id = id
    this.name = name
    this.module = module
    this.date = new Date()
  }
}

export default Save
