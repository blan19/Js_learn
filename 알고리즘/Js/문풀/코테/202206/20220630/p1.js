// * 프로그래머스

// ! 인풋
const n = 4;

// ! 솔루션
function solution(n) {
  let answer = 0;
  const board = Array.from(Array(n), () => Array.from(Array(n)).fill(false));

  const dfs = (depth) => {
    if (depth === n) {
      answer++;
      console.log(depth);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (checkPromising(depth, i)) continue;
      board[depth][i] = true;
      dfs(depth + 1);
      board[depth][i] = false;
    }
  };

  const checkPromising = (y, x) => {
    for (let i = 1; i < row; i++) {
      if (board[i] === board[row]) return false;
      if (Math.abs(i - row) === Math.abs(board[i] - board[row])) return false;
    }
    return true;
  };

  dfs(0);

  return answer;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(n));

// ! best
