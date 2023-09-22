import Game from "@game/Game";

const game = new Game();

console.log(game);

//-> clase entity

class Entity {
  constructor(name, hp, def, magicDef, attack, magicAttack, spells) {
    this.name = name;
    this.hp = hp;
    this.def = def;
    this.magicDef = magicDef;
    this.attack = attack;
    this.magicAttack = magicAttack;
    this.spells = spells;
  }

  carryOutAttack(target) {
    if (!target || typeof target !== "object") {
      console.log("No hay objetivo para atacar!");
      return;
    }
    //logica para atacar
    let restDamage = this.attack - target.def;
    target.hp -= restDamage;
    console.log(
      `${this.name} ataca a ${target.name} causando ${restDamage} puntos de daño`
    );
  }

  defendAttack(enemyAttack) {
    if (typeof enemyAttack !== "object" || enemyAttack.damage === undefined) {
      console.log("No se puede realizar el ataque");
      return;
    }

    //logica para defender
    let damageReduction = Math.floor(enemyAttack / 2);

    this.hp -= damageReduction;
    console.log(
      `${this.name} defiende el ataque y recibe ${damageReduction} puntos de daño`
    );
  }
}

class Character extends Entity {
  constructor(name, hp, def, magicDef, attack, magicAttack, spells, sword) {
    super(name, hp, def, magicDef, attack, magicAttack, spells);
    this.sword = sword;
  }
}

class Enemy extends Entity {
  constructor(name, hp, def, magicDef, attack, magicAttack, spells, element) {
    super(name, hp, def, magicDef, attack, magicAttack, spells);
    this.element = element;
  }
}

let hero = new Character("Ricther", 250, 25, 15, 50, 5, ["cruz", "acha"], null);
let boss = new Enemy(
  "Gran murcielago",
  220,
  35,
  30,
  45,
  10,
  ["Escupitajo, golpe de ala"],
  "tierra"
);

