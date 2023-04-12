// Problem 1 : Given an array print the position (starting with 1) and the element in a single line.

let names = ["Leo","Zeus","Prometheus","Leonidas","Athena"];

for(let index = 0; index < names.length; index++) {
    console.log((index+1), names[index])
}