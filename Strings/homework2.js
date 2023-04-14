// Wap to edit a string based on following conditions. % is replaced by h, $ is replaced by n, . is completely removed.

let string = "Go%.a$.";
let output = "";

for(let index = 0; index < string.length; index++) {
  if(string[index] == '%') {
    output+= 'h'
  }
  else if(string[index] == '$') {
    output += 'n'
  }
  else if(string[index] == '.') {
    continue;
  }
  else {
    output += string[index];
  }
}

console.log(output);