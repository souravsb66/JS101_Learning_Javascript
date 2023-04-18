// Problem 1: Given an array find the unique items in the array

let arr = [1,4,2,1,6,8,4,9,4,7,3,8];

for(let index = 0; index < arr.length-1; index++) {
  let count = 0;
  for(let index2 = 0; index2 < arr.length; index2++) {
    if(arr[index2] === arr[index]) {
      count++;
      
    }
  }

  if(count == 1) {
    console.log(arr[index]);
  }
}