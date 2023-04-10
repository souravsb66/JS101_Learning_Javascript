// Problem 4: Given 3 numbers (all different values), print which is greatest

//Using if-else ladder

let a = 3, b = 7, c = 5;

if((a > b) && (a>c)) {
  console.log("A is Greatest.");
} else if((b>c) && (b>a)) {
    console.log("B is Greatest.");
} else {
    console.log("C is Greatest.");
}

//Using Ternary Operators

((a > b) && (a > c)) ? console.log("A is Greatest.") : 
  ((b > c) && (b > a))? console.log("B is Greatest.") : 
    console.log("C is Greatest.");