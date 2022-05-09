const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((el) => +el);

const arr = input.slice();

arr.sort((a, b) => a - b).map((val) => console.log(val));
