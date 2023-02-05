const hero = {
    health: 5,
    power: 68,
    getStrength: function(){
    if (this.health <= 5){
    return this.power - 10; // 68-10 =58
    } else return this.power;
    }
    }
    function whoIsStronger(getStrength){
    const myStrength = 82;
    if (getStrength.call(hero) < myStrength){ //58 <82 // yes so i espected that it will return "a iam stronger "
    return "I am stronger"; 
    } else return "You are stronger";
    }
     console.log(whoIsStronger(hero.getStrength)); // it return you are stronger , so theres a problem of calling the function 

      // to fixed it i need to call the object hero inside the getStrength by using getStrength.call(hero)
       // and now the code will give me  Iam stronger commit 