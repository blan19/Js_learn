const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");
const [N, M] = input
  .shift()
  .split(" ")
  .map((el) => +el);
const graph = input.map((str) => str.split(" ").map((el) => +el));
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];
let answer = 0;

function countZero(graph) {
  let queue = [];
  let idx = 0;
  let cnt = 0;
  // * 2 확인하고 좌표 저장
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (graph[i][j] === 2) queue.push([i, j]);
    }
  }

  while (queue.length !== idx) {
    const [y, x] = queue[idx++];

    for (let i = 0; i < 4; i++) {
      const ny = dy[i] + y;
      const nx = dx[i] + x;

      if (ny >= N || ny < 0 || nx >= M || nx < 0 || graph[ny][nx] !== 0)
        continue;
      graph[ny][nx] = 2;
      queue.push([ny, nx]);
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (graph[i][j] === 0) cnt++;
    }
  }

  return cnt;
}

function dfs(cnt) {
  // * 백트래킹 조건 처리
  if (cnt === 3) {
    let check = graph.map((el) => el.slice());
    let checkZero = countZero(check);
    answer = Math.max(answer, checkZero);
    return;
  }
  // * dfs
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (graph[i][j] === 0) {
        graph[i][j] = 1;
        dfs(cnt + 1);
        graph[i][j] = 0;
      }
    }
  }
}

dfs(0);

console.log(answer);
