// WAP to split an even length string into two halves, reverse them and join them then print the final result.


let string = "Sourav";
let output = "";

for(let index = (string.length/2-1); index >= 0; index--) {
  output += string[index]
}

for(index = string.length - 1; index >= string.length/2; index--) {
  output += string[index];
}

console.log(output);