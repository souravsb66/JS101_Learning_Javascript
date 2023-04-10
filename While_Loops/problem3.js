// Problem 3: Print the sum of all the multiples of 3 from 0 to the given limit

let limit = 100;

for(let num = 0; num <= limit; num++) {
  if(num % 3 == 0) {
    console.log(num);
  }
}