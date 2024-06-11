
const luckyNumber = 7
let guess = Math.floor(Math.random() * 10) + 1;

while (guess != luckyNumber){
 let guess = Math.floor(Math.random() * 10) + 1;
   

   if (guess == luckyNumber){
     break
   }
   else {
     console.log("Nope, it isn't "+ guess)
   }
 
}

console.log ("My lucky number is "+ luckyNumber + "!")
