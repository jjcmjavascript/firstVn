class Text {
  constructor ({
    text = '',
    textAlignment = 'center',
    font = '30px Arial',
    textBaseline = 'middle'
  }) {
    this.text = text
    this.textAlignment = textAlignment
    this.font = font
    this.textBaseline = textBaseline
  }

  setText (text) {
    this.text = text
    return this
  }

  setTextAlignment (textAlignment) {
    this.textAlignment = textAlignment
    return this
  }

  setFont (font) {
    this.font = font
    return this
  }

  setTextBaseline (textBaseline) {
    this.textBaseline = textBaseline
    return this
  }

  draw ({ context, x = 0, y = 0 }) {
    context.textAlign = this.textAlignment
    context.font = this.font
    context.textBaseline = this.textBaseline
    context.fillText(this.text, x, y)
  }
}

export default Text
