// Part 1: Humble Beginnings

// Initial adventurer object with nested objects and methods
const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
    companion: {
      name: "Frank",
      type: "Flea",
      inventory: ["small hat", "sunglasses"],
    },
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  },
};

// Testing the roll method
adventurer.roll();
adventurer.roll(5);

// Logging each item in Robin's inventory
console.log("Robin's Inventory:");
for (let item of adventurer.inventory) {
  console.log(item);
}

// Part 2: Class Fantasy

class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }

  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
}

class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard"];
  constructor(name, role) {
    super(name);
    this.role = role;
    if (!Adventurer.ROLES.includes(role)) {
      throw new Error(
        `Invalid role: ${role}. Valid roles are ${Adventurer.ROLES.join(", ")}`
      );
    }
    this.inventory.push("bedroll", "50 gold coins");
  }

  scout() {
    console.log(`${this.name} is scouting ahead...`);
    this.roll();
  }
}

class Companion extends Character {
  constructor(name, type) {
    super(name);
    this.type = type;
  }
}

// Creating instances using classes
const robin = new Adventurer("Robin", "Fighter");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Companion("Leo", "Cat");
robin.companion.companion = new Companion("Frank", "Flea");
robin.companion.companion.inventory = ["small hat", "sunglasses"];

// Testing the roll and scout methods
robin.roll();
robin.scout();
robin.companion.roll();
robin.companion.scout();
