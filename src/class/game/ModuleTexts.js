class ModuleTexts {
  /**
   *
   * @param {Object} params
   * @param {Array[String]} param.texts
   */
  constructor ({ texts }) {
    this.texts = texts
    this.currentPosition = 0
  }

  get isFinished () {
    return this.currentPosition >= this.texts.length - 1
  }

  get isBegining () {
    return this.currentPosition <= 0
  }

  get currentText () {
    return this.texts[this.currentPosition]
  }

  next () {
    if (this.currentPosition >= this.texts.length) return

    this.currentPosition++
  }

  prev () {
    if (this.currentPosition <= 0) return

    this.currentPosition--
  }

  async play ({
    canvasTextShower
  }) {
    canvasTextShower.setText({ text: this.currentText })
    canvasTextShower.draw()
  }

  static async getInstace ({ texts }) {
    return new ModuleTexts({ texts })
  }
}

export default ModuleTexts
