// Problem 1 : Given a string count the number of words in that string

let string = "Hey, my name is Sourav";
let count = 0;

for(let index = 0; index<string.length; index++) {
  if(string[index] == ' ') {
      count++;
  }
}

console.log("No of words in string = "+(count+1));