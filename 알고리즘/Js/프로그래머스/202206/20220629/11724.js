const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");
let [info, ...list] = input;
const [N, M] = info.split(" ");

let answer = 0;
let graph = {};
for (let i = 1; i <= N; i++) graph[i] = [];
let visited = Array.from(Array(parseInt(N) + 1)).fill(false);
visited[0] = true;

list.forEach((str) => {
  const [u, v] = str.split(" ");
  graph[u].push(v);
  graph[v].push(u);
});

function dfs(pos) {
  for (let i = 0; i < graph[pos].length; i++) {
    const nPos = parseInt(graph[pos][i]);
    if (visited[nPos]) continue;
    visited[nPos] = true;
    dfs(graph[pos][i]);
  }
}

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    dfs(i);
    answer++;
  }
}

console.log(answer);
