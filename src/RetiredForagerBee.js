class RetiredForagerBee extends ForagerBee{
  constructor (age,color,food){
    super(age,color,food);
    
    this.age = age || 40;
    this.job = "gamble";
    this.color = color||"grey"
    this.canFly = false;
    this.treasureChest = [];

   }
   forage() { 
      return "I am too old, let me play cards instead";
   }
   gamble(treasure) { 
    super.forage(treasure);
 }
};
