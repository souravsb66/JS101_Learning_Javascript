// Problem 4: Print the average of even numbers from 1 to 100 (both included)

let sum = 0, count = 0;

for(let index = 1; index <= 100; index++) {
  if(index % 2 == 0) {
    sum += index;
    count++;
  }
}

console.log("Average = "+(sum/count));