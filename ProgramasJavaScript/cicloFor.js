/* for (let i = initialValue; condition; updateIterator) {
  // Code here
}*/

for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

  for (let i = 1; i <= 3; i++) {
    console.log("Beetlejuice!")
  }
  


  for (let i = 0; i < 5; i++) {
    if (i == 3) {
      break;
    }
    console.log(i);
  }
  

  for (let i = 0; i < 5; i++) {
    if (i == 1) {
      continue;
    }
    console.log(i);
  }
  /*
let i = 1: initializes an iterator variable.
i <= 10: the conditional statement that is tested before each iteration.
i++: this increments the iterator variable by 1 after each iteration.
Note: The ++ operator increments a number value by 1. It's the same as writing i = i + 1.
 */