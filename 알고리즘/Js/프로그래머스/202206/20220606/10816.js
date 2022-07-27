const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

// ! 인풋
const N = parseInt(input[0]);
const numbers = input[1].split(" ").map((num) => +num);
const M = parseInt(input[2]);
const targets = input[3].split(" ").map((num) => +num);

// ! 솔루션
const solution = (N, M, numbers, targets) => {
  let map = new Map();
  numbers.forEach((num) => {
    if (map.has(num)) map.set(num, map.get(num) + 1);
    else map.set(num, 1);
  });
  return targets
    .map((target) => (map.has(target) ? map.get(target) : 0))
    .join(" ");
};

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(N, M, numbers, targets));

// ! best
