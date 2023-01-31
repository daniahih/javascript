function Pokemon(pokemonName, pokemonType,
    pokemonAttackList){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
    }
    Pokemon.prototype.callPokemon=function(){
        console.log(`i choose you ${this.name}`)
    }
    Pokemon.prototype.attack=function(id){
        console.log(`${this.name} used ${this.attackList[id]}` )
    }

    const  picachu =new Pokemon('picatsho','soid',['kill','Flying'])
    const dania = new Pokemon('dania','electrical',['sleep','kill'])
    const Kirlia = new Pokemon('Kirlia','normal',['flying','dark'])

    picachu.callPokemon()
    picachu.attack(0);
    picachu.attack(1);
    dania.callPokemon()
    dania.attack(0)
    dania.attack(1);
    Kirlia.callPokemon()
    Kirlia.attack(0)
    Kirlia.attack(1)
