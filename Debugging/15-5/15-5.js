// What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down.
// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all

function countOccurrences (str, char){
    let counter = 0 ;
    for ( let i = 0 ; i < str .length; i ++ ){
    if ( str . charAt ( i ) === char ){
    counter + 1 ;  //error here 
    //   "counter+1" is not valid. Should be counter++ / counter+=1 / counter = counter +1
     }
    } return counter ;
    }
    countOccurrences ( "ini mini miny moe" , "n" );