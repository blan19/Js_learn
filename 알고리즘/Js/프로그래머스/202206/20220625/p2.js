// * 프로그래머스

// ! 인풋
// const board = [
//   [0, 1, 1, 1],
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
//   [0, 0, 1, 0],
// ];

const board = [
  [0, 0, 1, 1],
  [1, 1, 1, 1],
];

// const board = [
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
// ];

// ! 솔루션
function solution(board) {
  let answer = 0;
  const N = board[0].length,
    M = board.length;
  if (N === 1 || M === 1) return 1;
  for (let i = 1; i < M; i++) {
    for (let j = 1; j < N; j++) {
      if (board[i][j] !== 0) {
        board[i][j] =
          Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]) + 1;
      }
    }

    answer = Math.max(answer, ...board[i]);
  }

  return answer ** 2;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(board));

// ! best
