// Question 1:
// In your own words what will this point to and why?
// (Note this is the global scope)
console.log(this);
// it will return the window object 

// Question 2:
// a. In your own words what will this point to and why?
// b. How can you fix this code?
const myObj = {
    name: "Timmy",
    greet: () => {
    console.log(`Hello ${this.name}`);
    },
    };
    myObj.greet();

    // becouse the function is define as arrow function when i call this , it will see where is the function , it doesnot found the function so it 
    //will call the global   
    //this is who i fix it 
    const myObj2 = {
        name: "Timmy",
        greet: function () {
        console.log(`Hello ${this.name}`);
        },
       };
       myObj2.greet();


    //    Question 3:

    const myFuncDec = function () {
        console.log(this);
 };
 myFuncDec();


    //this will still point to the window becouse the function is not bounded


    // Question 4:
    const myFuncArrow = () => {
        console.log(this);
    };
    myFuncArrow();
    
    //this will still point to the window becaust the function is not bounded
    //to an element, and the element above it is the window



    // Question 5:
    // a. In your own words, what will this point to and why?
    // b. How can you fix this code?

    document.querySelector(".element").addEventListener('click', function (){
        console.log(this);
        });

        // this here will return the element 