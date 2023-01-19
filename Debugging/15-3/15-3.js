// What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down.
// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all


// [1,2,3,4,5,6,7,8,9,10] => 2+4+6+8+10 = 30
function getSumOfEven(arr){
    return arr[2] + arr[4] + arr[6] + arr[8] + arr[10]; // error line //1
       // first of all array start from index 0 not from 1 , so this will count the sum for odd numbers  //3 
       // return arr[1]+ arr[3]+arr[5]+arr[7+arr[9]] //4
    }
    getSumOfEven([1,2,3,4,5,6,7,8,9,10]);