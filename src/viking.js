// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  // attack method
  attack() {
    return this.strength;
  }
  // receive damage method
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  // receive damage method re-implemented
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  // Battlecry method
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  // receive damage method re-implemented
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.saxonArmy = [];
    this.vikingArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    let indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let indexViking = Math.floor(Math.random() * this.vikingArmy.length);
    let saxon = this.saxonArmy(indexSaxon);
    let viking = this.vikingArmy(indexViking);
    let result = saxon.receiveDamage(viking.attack());
    if (saxon.health <= 0) {
      this.saxonArmy.splice(indexSaxon, 1);
    }
    return result;
  }

  saxonAttack() {
    let indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let indexViking = Math.floor(Math.random() * this.vikingArmy.length);
    let saxon = this.saxonArmy(indexSaxon);
    let viking = this.vikingArmy(indexViking);
    let result = viking.receiveDamage(saxon.attack());
    if (viking.health <= 0) {
      this.vikingArmy.splice(indexViking, 1);
    }
    return result;
  }

  showStatus() {
    if (this.saxonArmy === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy === 0) {
      return "Saxons have fougth for their lives and survided another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
