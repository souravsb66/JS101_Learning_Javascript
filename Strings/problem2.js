// Problem 2 : Given an array of string count the overall total number of characters

let arr = ["Hey", "this", "is", "Sourav"];

let count = 0;

for(let index = 0; index < arr.length; index++) {
  count+= arr[index].length;
}

console.log("Total character count = "+count)