/* 
Let's use our newfound knowledge of JavaScript loops to create a program that converts an integer into its equivalent binary number.

Note: Binary numbers are "base-2", meaning that they are represented by zeroes and ones (0s and 1s).

In a based-numbers.js file, create a program that starts with a myNumber variable, initialized to an integer of your choosing, followed by a binary variable set to an empty string.

Next, use a loop to go from myNumber to 0, reducing myNumber by half each time (i.e., Math.floor(num / 2)).

Let's do the following in each iteration:

Determine if the current value of myNumber can be divided by 2.
If so, add "0" to binary. Otherwise, add "1".
*/


let myNumber = 10;
let binary ="";

for (let num = myNumber; num > 0; num = Math.floor(num / 2)) {
   
    if (num % 2 === 0) {
        binary = "0" + binary ; 
    } else {
        binary = "1" + binary ; 
    }
}

console.log("El número", myNumber, "en binario es:", binary);

