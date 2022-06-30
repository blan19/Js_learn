const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((el) => +el);

const board = input.map((str) => str.split(""));
let visited = Array.from(Array(11), () =>
  Array.from(Array(11), () =>
    Array.from(Array(11), () => Array.from(Array(11)).fill(false))
  )
);
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

let queue = [];
let red = [];
let blue = [];
let idx = 0;

// * 레드/블루 구슬을 찾는다
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === "R") red.push(i, j);
    if (board[i][j] === "B") blue.push(i, j);
  }
}

// * bfs
queue.push([...red, ...blue, 1]);
while (queue.length !== idx) {
  const [ry, rx, by, bx, cnt] = queue[idx++];

  if (cnt > 10) {
    console.log(-1);
    return;
  }

  for (let i = 0; i < 4; i++) {
    let [nry, nrx, rcnt] = move(ry, rx, dy[i], dx[i], cnt);
    let [nby, nbx, bcnt] = move(by, bx, dy[i], dx[i], cnt);

    if (board[nby][nbx] !== "O") {
      if (board[nry][nrx] === "O") {
        console.log(cnt);
        return;
      }
      if (nry === nby && nrx === nbx) {
        if (rcnt > bcnt) {
          nry = nry - dy[i];
          nrx = nrx - dx[i];
        } else {
          nby = nby - dy[i];
          nbx = nbx - dx[i];
        }
      }
      if (visited[nry][nrx][nby][nbx]) continue;
      visited[nry][nrx][nby][nbx] = true;
      queue.push([nry, nrx, nby, nbx, cnt + 1]);
    }

    if (board[nby][nbx] === "O" && board[nry][nrx] === "O") {
      console.log(-1);
      return;
    }
  }
}

function move(y, x, dy, dx) {
  let cnt = 0;
  while (board[y + dy][x + dx] !== "#" && board[y][x] !== "O") {
    y += dy;
    x += dx;
    cnt++;
  }
  return [y, x, cnt];
}
