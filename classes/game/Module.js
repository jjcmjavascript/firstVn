class Module {
  constructor({name, song, historyFragment}) {
    this.name = name;
    this.song = song;
    this.historyFragment = historyFragment;
  }

  execute(){
    console.log(`Executing ${this.name} module`);
    this.song.execute();
    this.historyFragment.execute();
  }
}