const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");
const [_, ...list] = input;

const map = new Map();
let answer = [];

list.forEach((book) => {
  if (map.has(book)) map.set(book, map.get(book) + 1);
  else map.set(book, 1);
});

for (const [key, value] of map) {
  answer.push([key, value]);
}

answer.sort((a, b) => {
  if (b[1] === a[1]) {
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  }
  return b[1] - a[1];
});

console.log(answer);

console.log(answer[0][0]);
