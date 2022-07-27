const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";

const input = fs.readFileSync(filePath).toString().trim();

const [N, K] = input.split(" ").map((el) => +el);
let visited = Array(100001).fill(false);
let queue = [[N, 0]];
let idx = 0;

while (queue.length !== idx) {
  const [pos, cnt] = queue[idx++];

  if (visited[pos]) continue;
  if (pos === K) {
    console.log(cnt);
    break;
  }
  visited[pos] = true;

  if (pos * 2 <= 100000) queue.push([pos * 2, cnt + 1]);
  if (pos + 1 <= 100000) queue.push([pos + 1, cnt + 1]);
  if (pos - 1 >= 0) queue.push([pos - 1, cnt + 1]);
}
