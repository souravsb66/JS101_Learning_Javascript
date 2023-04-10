// Innitialize 3 variables and if all the 3 are same print all are same, if two are same print the two variables that are same, and if all are different print that.


let a = "Gohan", b = "Gohan", c = "Gohan";

// Using only ternary operators

((a == b) && (b == c))? console.log("All the variables are same.") : ((a != b) && (b != c) && (a != c))? console.log("None of the variables are same") : (a == b)? console.log("A and B are same"): (b==c)? console.log("B and C are same") : console.log("C and A are same");

// Using if-else ladder

if((a == b) && (b == c)) {
  console.log("All the variables are same")
} else if(a == b) {
    console.log("A and B are same");
} else if(b == c) {
    console.log("B and C are same");
} else if(c == a) {
    console.log("C and A are same");
} else {
    console.log("None of the variables are same");
}

// // Approach 2

// if(a == b) {
//   if(b == c) {
//       console.log("All the variables are same")
//     } else {
//       console.log("A and B are same");
//   } 
// } else if(b == c) {
//     console.log("B and C are same");
// } else if(c == a) {
//     console.log("C and A are same");
// } else {
//     console.log("None of the variables are same");
// }
