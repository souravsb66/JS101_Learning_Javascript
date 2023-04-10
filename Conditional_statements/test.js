let a = 11, b = 11, c = 110;

if(a == b) {
  console.log("A and B are same.");
} else if(b == c) {
  console.log("B and C are same."); 
} else if(c == a) {
  console.log("C and A are same.");
} else{
  console.log("A, B, C are all different");
}

//--------------------------------------------------------------------

a = 10;
b = 5;

console.log(((a+b) - (b-a) +(a**b) - a - b));