// * 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";

// ! 인풋
let [t, ...list] = fs.readFileSync(filePath).toString().split("\n");

// ! 솔루션
function calc(n) {
  const arr = Array.from(Array(n))
    .fill(0)
    .map((_, idx) => idx + 1);
  return arr.reduce((acc, cur) => acc + cur, 0);
}

let answer = [];

while (t > 0) {
  let sum = 0;
  list[5 - t].split("X").forEach((str) => {
    if (str !== "" && str.length) sum += calc(str.length);
  });
  answer.push(sum);
  t--;
}

console.log(answer.join("\n"));

// ! 주의사항

// ! 로직

// ! 아웃풋

// ! best
