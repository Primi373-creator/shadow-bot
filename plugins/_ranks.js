
global.rpg = {
	
  role(level) {
    level = parseInt(level)
    if (isNaN(level)) return { name: '', level: '' }
    
    const roles = [
            { name: "Adventurer", level: 0 },
            { name: "Rookie Mage", level: 4 },
            { name: "Spellcaster", level: 8 },
            { name: "Sorcerer", level: 12 },
            { name: "Arcane Master", level: 16 },
            { name: "Guardian Knight", level: 20 },
            { name: "Champion of Legends", level: 24 },
            { name: "Heroic Warrior", level: 28 },
            { name: "Legendary Hero", level: 32 },
            { name: "Mythical Being", level: 36 },
            { name: "Wizard Extraordinaire", level: 48 },
            { name: "Archmage Supreme", level: 52 },
            { name: "Wise Sage", level: 56 },
            { name: "Divine Protector", level: 60 },
            { name: "All-Father", level: 100 }
        ];


    return role.reverse().find(role => level >= role.level)
  }
}
