
// 1. First, find the line that contains the problem. Write it down
//line 10 
// 2. Which debug method did you use to find the bug? 

// 3. Explain the bug in your own words. the condition not writinen in this way , and the spiling to the call function was wrong 

// 4. Fix the code and submit it all.



function findSmallest(a, b, c){
    if (a > b > c){ //condition is error  if(a>c && b>c)
    return c;
    } else if (a > c > b) {  // if(b>a && c>a )
    return a;
    } else {
    return b;
    }
    }
    findSmalest(52,66, 2); // error it should be findSmallest not  findSmalest  , spilling error 



