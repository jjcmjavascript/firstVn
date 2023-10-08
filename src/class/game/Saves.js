class Saves {
  contrunctor () {
    this.list = []
  }

  loadLocalSave () {
    this.list = JSON.parse(localStorage.getItem('saves'))
  }

  saveLocalSave () {
    localStorage.setItem('saves', JSON.stringify(this.list))
  }

  save ({ save }) {
    this.list.push(save)
  }

  load ({ id }) {
    return this.list
  }
}

export default Saves
