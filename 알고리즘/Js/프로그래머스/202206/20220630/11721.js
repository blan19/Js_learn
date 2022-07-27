const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("");
let answer = [];

while (input.length) {
  answer.push(input.splice(0, 10));
}

console.log(answer.map((el) => el.join("")).join("\n"));
