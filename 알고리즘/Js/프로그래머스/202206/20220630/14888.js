const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");
const N = input.shift();
const [number, operators] = input.map((el) => el.split(" ").map((el) => +el));
let arr = [];
let visited = Array.from(Array(N)).fill(false);
let min = Infinity,
  max = -Infinity;
let comb = Array.from(Array(N)).fill(0);

for (let i = 0; i < operators.length; i++) {
  if (operators[i] !== 0) {
    const operator = i
      .toString()
      .repeat(operators[i])
      .split("")
      .map((el) => +el);
    arr.push(...operator);
  }
}

function dfs(depth) {
  if (depth === N - 1) {
    const operatedNum = calc(comb);
    min = Math.min(operatedNum, min);
    max = Math.max(operatedNum, max);
    return;
  }

  for (let i = 0; i < N - 1; i++) {
    if (visited[i]) continue;
    comb[depth] = i;
    visited[i] = true;
    dfs(depth + 1);
    visited[i] = false;
  }
}

function calc(idx) {
  let num = 0;
  for (let i = 0; i < number.length; i++) {
    if (i === 0) {
      num = number[i];
    } else {
      // * 연산자에 따라 계산
      const o = idx[i - 1];
      if (arr[o] === 0) num = num + number[i];
      if (arr[o] === 1) num = num - number[i];
      if (arr[o] === 2) num = num * number[i];
      if (arr[o] === 3)
        num =
          num < 0
            ? Math.floor(Math.abs(num) / number[i]) * -1
            : Math.floor(num / number[i]);
    }
  }
  return num;
}

dfs(0);

console.log(max + "\n" + min);
