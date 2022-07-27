// * 프로그래머스

// ! 인풋
const places = [
  ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
  ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
];

// ! 솔루션
function solution(places) {
  let answer = [];
  const dy = [0, 1, 0, -1, -1, -1, 1, 1];
  const dx = [1, 0, -1, 0, -1, 1, -1, 1];
  const mdy = [0, 2, 0, -2];
  const mdx = [2, 0, -2, 0];
  let flag = false;
  let chair = [];
  places.forEach((place) => {
    place
      .map((str) => str.split(""))
      .forEach((row, rowIdx, arr) => {
        row.forEach((col, colIdx) => {
          if (col === "P") {
            for (let i = 0; i < 4; i++) {
              const ny = rowIdx + dy[i];
              const nx = colIdx + dx[i];
              if (ny < 0 || nx < 0 || nx >= 5 || ny >= 5) continue;
              if (arr[ny][nx] === "P") {
                flag = true;
              }
              if (arr[ny][nx] === "O") {
                chair.push({ ny, nx });
              }
            }
          }

          if (!flag) {
            for (let i = 0; i < 4; i++) {
              const ny = rowIdx + mdy[i];
              const nx = colIdx + mdx[i];
              if (ny < 0 || nx < 0 || nx >= 5 || ny >= 5) continue;
              if (arr[ny][nx] === "P" && chair.length) {
                chair.forEach((pos) => {
                  if (Math.abs(pos.ny - ny) + Math.abs(pos.nx - nx) === 1) {
                    flag = true;
                  }
                });
              }
            }

            for (let i = 4; i < 8; i++) {
              const ny = rowIdx + dy[i];
              const nx = colIdx + dx[i];
              if (ny < 0 || nx < 0 || nx >= 5 || ny >= 5) continue;
              if (arr[ny][nx] === "P" && chair.length) {
                chair.forEach((pos) => {
                  if (Math.abs(pos.ny - ny) + Math.abs(pos.nx - nx) === 1) {
                    flag = true;
                  }
                });
              }
            }
          }
          chair = [];
        });
      });

    if (flag) {
      answer.push(0);
    } else {
      answer.push(1);
    }
    flag = false;
  });
  return answer;
}

// ! 주의사항

// ! 로직
// * 맵에서 P를 발견 할 때 맨해튼 거리 2이내 측정한다
// * 이내에 P가 존재한다면, 맨해튼 거리 측정한다
// * 맨해튼 거리가 2이상 이라면, 또 이내에 O가 존재하는지 체크
// * 존재하지 않는다면 안전한 구역!

// * P를 만난다면, 상하좌우 체크
// * P가 존재하면 break
// * P가 존재하지 않는다면, O를 체크하고 대각선 조사 후 P가 있다면 O가 존재했는지 체크
// * 존재했다면 break

// ! 아웃풋
console.log(solution(places));

// ! best
