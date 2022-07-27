// * 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

const [[N, M], numbers, ...target] = input.map((el) =>
  el.split(" ").map((el) => +el)
);

function solve() {
  const answer = [];
  let sum = Array(numbers.length + 1).fill(0);

  for (let i = 1; i <= numbers.length; i++) {
    sum[i] = sum[i - 1] + numbers[i - 1];
  }

  for (let i = 0; i < target.length; i++) {
    const [start, end] = target[i];

    answer.push(sum[end] - sum[start - 1]);
  }
  return answer.join("\n");
}

console.log(solve());
