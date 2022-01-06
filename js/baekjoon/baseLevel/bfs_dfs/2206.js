const fs = require("fs");

let input = fs
  .readFileSync(
    "/Users/parkjunseo/Desktop/VSC/Js_learn/js/baekjoon/example.txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map((element) => Number(element));

const rank = input[0];
const length = input[1];

// console.log(rank);
// console.log(length);
console.log(input);
