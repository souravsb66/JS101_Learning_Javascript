// Problem 2: Given a string print, the number of times each character appears

let string = "fjlofsnanflefnacnwowfboqfqfqdm";

// let string = "abcaba";

for(let index = 0; index < string.length; index++) {
  let char = string[index];
  let count = 0;
  for(let index2 = 0; index2 < string.length; index2++) {
    if(string[index2] === char) {
      count++;
    }
  }
  console.log(string[index],count);
  if(count > 1) {
    string = string.replaceAll(string[index],"");
    index--;
  }
}