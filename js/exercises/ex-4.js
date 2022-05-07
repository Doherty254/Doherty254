/*
Write a for loop that will iterate from 0 to 20. For each iteration, 
it will check if the current number is even or odd, and report that
 to the screen (e.g. "2 is even"). 
*/

for (var x=0; x<=20; x++) {
    if (x === 0) {
            console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}