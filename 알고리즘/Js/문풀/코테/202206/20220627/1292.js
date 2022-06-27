// * 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";

const [A, B] = fs
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map((ch) => +ch);
let str = "";

for (let i = 1; ; i++) {
  str += String(i).repeat(i);
  if (str.length > B) break;
}

let answer = str
  .split("")
  .slice(A - 1, B)
  .reduce((acc, cur) => acc + +cur, 0);

console.log(answer);
