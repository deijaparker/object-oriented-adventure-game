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
        inventory: ["small hat", "sunglasses"]
      }
    },
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
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