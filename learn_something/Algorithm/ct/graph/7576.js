// * 토마토
let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((str) => str.split(" ").map((el) => +el));

const [M, N] = input.splice(0, 1).flat();
let map = input;
let queue = [];
let idx = 0;
let day = 0;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function isRange(dx, dy) {
  if (dx >= 0 && dy >= 0 && dx < N && dy < M) {
    return true;
  }
  return false;
}

function bfs(queue) {
  while (queue.length != idx) {
    const [x, y, cnt] = queue[idx++];
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (isRange(nx, ny) && map[nx][ny] === 0) {
        map[nx][ny] = 1;
        queue.push([nx, ny, cnt + 1]);
      }
    }
    day = cnt;
  }

  map.forEach((_, i) => {
    if (map[i].includes(0)) {
      day = -1;
    }
  });

  return day;
}

map.forEach((_, i) => {
  map[i].forEach((_, j) => {
    if (map[i][j] === 1) {
      queue.push([i, j, 0]);
    }
  });
});

console.log(bfs(queue));
