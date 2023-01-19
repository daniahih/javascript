// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all



function calcAverage (arr){
    var sum ; // error it should be var sum ; 
    for ( var i = 0 ; i < arr .length; i ++ ){
    sum += arr [ i ];  
    } return sum ; // where is the avarage equastion i should divide it in the lenght of array 
    // return sum/arr.lenght 
    }
    calcAverage ([ 85 , 90 , 92 ]);