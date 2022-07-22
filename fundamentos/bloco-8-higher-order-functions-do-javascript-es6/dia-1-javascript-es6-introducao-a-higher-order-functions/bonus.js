const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: 20,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const scoreDragon = ((callback) => {  
    const minimo =15; 
    const randomNumber = Math.floor(Math.random() * (dragon.strength -minimo +1)) + minimo;
    return randomNumber
  });

  console.log(scoreDragon(dragon));