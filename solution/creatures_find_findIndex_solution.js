// Array of mythical creatures
const mythicalCreatures = [
  {name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
  {name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
  {name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
  {name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
  {name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];

// 1. Find first Water type creature
const waterCreature = mythicalCreatures.find(function(creature) {
  return creature.type === "Water";
});

// 2. Find index of Griffin
const griffinIndex = mythicalCreatures.findIndex(function(creature) {
  return creature.name === "Griffin";
});

// 3. Find first creature in Enchanted Forest
const forestCreature = mythicalCreatures.find(function(creature) {
  return creature.lastSeen === "Enchanted Forest";
});

console.log("First Water Creature:", waterCreature.name);
// Expected: "Mermaid"

console.log("Index of Griffin:", griffinIndex);
// Expected: 3

console.log("Creature in Enchanted Forest:", forestCreature.name);
// Expected: "Unicorn"
