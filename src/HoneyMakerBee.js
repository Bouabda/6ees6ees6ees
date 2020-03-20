class HoneyMakerBee extends Bee{
   constructor(age,color,food){
     super(age,color,food);
     
     this.age = age || 10;
     this.job = "make honey";
     this.honeyPot = 0;
   }  
   makeHoney () { this.honeyPot++ };
   giveHoney () { this.honeyPot-- };
};


