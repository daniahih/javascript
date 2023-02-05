const wonderWoman = {
    name: "Diana Prince"
    }
    const batman = {
    name: "Bruce Wayne"
    }
    const superHeroes = [wonderWoman, batman];

    function printName() {
        console.log(`my name is ${this.name}`);
        }
 //  i want to do a function that takes the array and the function print 
        function printHeroes(heroes, printFunc) { 
            heroes.forEach(function(hero) { // hero refers to --> for each element in the array 
                printFunc.call(hero); // call the function that will print the name  with the elements from the array  
              });
            }
            printHeroes(superHeroes, printName); // superhere refers to the array hearos in the function , 


