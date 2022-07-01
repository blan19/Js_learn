const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((el) => +el);
const [r, c, d] = input
  .shift()
  .split(" ")
  .map((el) => +el);
const space = input.map((el) => el.split(" ").map((el) => +el));

const answer = bfs(r, c, d, 0);

console.log(answer);

function bfs(y, x, d, cnt) {
  let queue = [[y, x, d, cnt]];
  let idx = 0;
  let clean = 0;

  while (queue.length !== idx) {
    const [ny, nx, nd, cnt] = queue[idx++];
    // * cnt === 4
    if (cnt === 4) {
      if (space[ny + 1][nx] === 1) break;
      else {
        queue.push([ny + 1, nx, nd, 0]);
      }
    }

    // * 청소하지 않았다면
    if (space[ny][nx] === 0) {
      space[ny][nx] = true;
      clean++;
    }

    // console.log(space);

    // * 방향 처리
    if (check(nd, ny, nx) || check(nd, ny, nx) === 1) {
      queue.push([ny, nx, direction(nd), cnt + 1]);
    } else {
      if (nd === 0) queue.push([ny, nx - 1, direction(nd), 0]);
      else if (nd === 1) queue.push([ny - 1, nx, direction(nd), 0]);
      else if (nd === 2) queue.push([ny, nx + 1, direction(nd), 0]);
      else queue.push([ny + 1, nx, direction(nd), 0]);
    }
  }

  return clean;
}

function check(d, y, x) {
  if (d === 0) return space[y][x - 1];
  else if (d === 1) return space[y - 1][x];
  else if (d === 2) return space[y][x + 1];
  else return space[y + 1][x];
}

function direction(d) {
  if (d === 0) return 3;
  else if (d === 1) return 0;
  else if (d === 2) return 1;
  else return 2;
}

// * 0-북 : x -1, 1-동  : y - 1, 2-남 : x + 1, 3-서 : y + 1
// * 청소를 했다면 true

// ! best
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n");

// const [n, m] = input.shift().split(" ").map(Number);
// let [x, y, d] = input.shift().split(" ").map(Number);
// const arr = input.map((i) => i.split(" ").map(Number));
// const visited = Array.from({ length: n }, () =>
//   Array.from({ length: m }, () => false)
// );
// const dx = [-1, 0, 1, 0];
// const dy = [0, 1, 0, -1];

// let ans = 0;
// let cnt = 0;

// while (1) {
//   if (cnt === 4) {
//     const [backx, backy] = [x + dx[(d + 6) % 4], y + dy[(d + 6) % 4]];
//     if (arr[backx][backy] === 1) break;
//     else {
//       x = backx;
//       y = backy;
//       cnt = 0;
//     }
//   }

//   if (!visited[x][y]) {
//     visited[x][y] = true;
//     arr[x][y] = 2;
//     ans++;
//   }

//   const [leftx, lefty] = [x + dx[(d + 3) % 4], y + dy[(d + 3) % 4]];
//   if (arr[leftx][lefty] === 0) {
//     x = leftx;
//     y = lefty;
//     cnt = 0;
//   } else {
//     cnt++;
//   }
//   d = (d + 3) % 4;
// }

// console.log(ans);
