class ForagerBee extends HoneyMakerBee {
   constructor (age,color,food){
    super(age,color,food);
    
    this.age = age || 10;
    this.job = "find pollen";
    this.canFly = true;
    this.treasureChest = [];

   }
   forage(treasure) { 
      this.treasureChest.push(treasure);
   }
   gamble(treasure) { 
      super.forage(treasure);
   }
};
