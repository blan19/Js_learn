// * 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

const [n, ...words] = input;
let set = new Set();
let answer = [];

for (let i = 0; i < n; i++) {
  const word = words[i];
  const reverse = word.split("").reverse().join("");
  const mid = Math.floor(word.length / 2);

  if (word === reverse) {
    answer.push(word.length, word[mid]);
    break;
  }

  if (set.has(reverse)) {
    answer.push(word.length, word[mid]);
    break;
  } else {
    set.add(word);
  }
}

console.log(answer.join(" "));
