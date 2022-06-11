// * 프로그래머스

// ! 인풋
const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];

// const maps = [
//   [1, 0, 1, 1, 1],
//   [1, 0, 1, 0, 1],
//   [1, 0, 1, 1, 1],
//   [1, 1, 1, 0, 0],
//   [0, 0, 0, 0, 1],
// ];

// ! 솔루션
function solution(maps) {
  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];

  let visited = maps.map((map) => map.map((val) => val));

  function bfs(y, x, cnt) {
    let idx = 0;
    let queue = [];
    queue.push([y, x, cnt]);

    while (queue.length != idx) {
      const [curY, curX, curCnt] = queue[idx++];
      for (let i = 0; i < 4; i++) {
        const ny = curY + dy[i];
        const nx = curX + dx[i];
        if (
          ny >= 0 &&
          nx >= 0 &&
          ny < maps.length &&
          nx < maps[0].length &&
          visited[ny][nx] === 1
        ) {
          visited[ny][nx] = curCnt + 1;
          queue.push([ny, nx, curCnt + 1]);
        }
      }
    }
  }

  bfs(0, 0, 1);

  return visited[maps.length - 1][maps[0].length - 1] === 1
    ? -1
    : visited[maps.length - 1][maps[0].length - 1];
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(maps));

// ! best
// function bfs(queue) {
//   while (queue.length != idx) {
//     const [x, y, cnt] = queue[idx++];
//     for (let i = 0; i < 4; i++) {
//       const nx = x + dx[i];
//       const ny = y + dy[i];
//       if (isRange(nx, ny) && map[nx][ny] === 0) {
//         map[nx][ny] = 1;
//         queue.push([nx, ny, cnt + 1]);
//       }
//     }
//     day = cnt;
//   }

//   map.forEach((_, i) => {
//     if (map[i].includes(0)) {
//       day = -1;
//     }
//   });

//   return day;
// }
