class Game {
  /**
   * @param {object} param
   * @param {ModuleFactory} param.moduleFactory
   */
  constructor ({ moduleFactory, saveManager, eventManager }) {
    this.moduleFactory = moduleFactory
    this.saveManager = saveManager
    this.eventManager = eventManager
    this.modules = []
  }

  get currentModule () {
    return this.modules[this.modules.length - 1]
  }

  get currentModuleId () {
    return this.currentModule?.id || 1
  }

  async stopCurrentModule () {
    await this.currentModule.stop()
  }

  async pushModule ({ id }) {
    const module = await this.moduleFactory.build({ id })

    this.modules.push(module)
  }

  async nextModule () {
    const nextModuleId = this.currentModule.next

    if (!this.currentModule.texts?.isFinished) {
      this.currentModule.texts.next()
    } else if (nextModuleId) {
      await this.stopCurrentModule()
      await this.pushModule({ id: nextModuleId })
    }
  }

  async prevModule () {
    const prevModuleId = this.currentModule.prev

    if (!this.currentModule.texts?.isBegining) {
      this.currentModule.texts.prev()
    } else if (prevModuleId) {
      await this.stopCurrentModule()
      await this.pushModule({ id: prevModuleId })
    }
  }

  static async getInstace ({ moduleFactory, saveManager, eventManager }) {
    const instance = new Game({ moduleFactory, saveManager, eventManager })
    await instance.pushModule({ id: 1 })

    return instance
  }
}

export default Game
