// * 문자열 분석
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");
const apples = new Set();
const directions = [];
let count = 0;
const [N, K, ...rest] = input;
const L = rest[K];
const queue = ["0 0"];
let index = 0;
const pos = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

for (let i = 0; i < Number(K); i++) {
  apples.add(rest[i]);
}

for (let i = 1; i <= Number(L); i++) {
  directions.push(rest[Number(i) + Number(K)]);
}
for (let i = 1; i <= 10000; i++) {
  const cur = directions[0];

  count = i;

  const [dx, dy] = pos[index];
  const [x, y] = queue[queue.length - 1].split(" ").map(Number);
  const [nx, ny] = [x + dx, y + dy];
  const target = `${nx + 1} ${ny + 1}`;

  if (queue.includes(nx + " " + ny) || nx < 0 || nx >= N || ny < 0 || ny >= N)
    break;

  if (apples.has(target)) {
    apples.delete(target);
    queue.push(nx + " " + ny);
  } else {
    queue.shift();
    queue.push(nx + " " + ny);
  }

  if (!cur) continue;

  const [s, direction] = directions[0].split(" ");

  if (parseInt(s) === i) {
    move(direction);
    directions.shift();
  }
}

function move(direction) {
  if (direction === "L") {
    if (index !== 0) index -= 1;
    else index = 3;
  } else {
    if (index !== 3) index += 1;
    else index = 0;
  }
}

console.log(count);
