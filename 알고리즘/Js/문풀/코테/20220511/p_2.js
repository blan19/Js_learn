const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

const moves = [1, 5, 3, 5, 1, 2, 1, 4];

function solution(board, moves) {
  let answer = 0;
  let stk = [];
  moves.forEach((move) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][move - 1] !== 0) {
        if (stk.length) {
          const top = stk[stk.length - 1];
          if (top === board[i][move - 1]) {
            stk.pop();
            answer += 2;
          } else {
            stk.push(board[i][move - 1]);
          }
          board[i][move - 1] = 0;
          break;
        } else {
          stk.push(board[i][move - 1]);
          board[i][move - 1] = 0;
          break;
        }
      }
    }
  });

  return answer;
}

console.log(solution(board, moves));
