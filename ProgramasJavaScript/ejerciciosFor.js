/* 
Suppose you got detention and the professor asks you to write a phrase 100 times.

Let's create a program that uses for loops to make short work of this!

Use the for loop to log the following message to the Console 100 times:

I Must Not Tell Lies

(This is where we begin to see the true power of computing. What takes humans hours can take computer microseconds. 🤯)
*/

for (let i = 1; i <=100; i++){
    console.log(i + " I Must Not Tell Lies 💖");
}

/* 
Let's try out the continue and break keywords using even and odd numbers!

Write an even-odds.js file that begins with a for loop that iterates from 1 to 50.

If the iterator variable i is odd, use the continue keyword to skip this iteration. Otherwise, log the number to the Console.

If the iterator variable is equal to 42, log 42 to the Console and use the break keyword to exit the loop.
*/


for (i=1; i<=50; i++){
    if (i%2==1){
        continue
    }
    else{
        console.log(i)
    }
  if (i==42){
    break
  }
}