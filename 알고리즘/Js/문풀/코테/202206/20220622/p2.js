// * 프로그래머스

// ! 인풋
const land = [
  [1, 2, 3, 5],
  [5, 6, 7, 8],
  [4, 3, 2, 1],
];

// ! 솔루션
function solution(land) {
  const N = land.length;
  const M = 4;
  const dp = Array.from(Array(N), () => Array.from(Array(M).fill(0)));

  dp[0][0] = land[0][0];
  dp[0][1] = land[0][1];
  dp[0][2] = land[0][2];
  dp[0][3] = land[0][3];

  for (let i = 1; i < N; i++) {
    for (let j = 0; j < M; j++) {
      let max = 0;
      for (let k = 0; k < M; k++) {
        if (k !== j && max < dp[i - 1][k]) max = dp[i - 1][k];
      }
      dp[i][j] = land[i][j] + max;
    }
  }

  return Math.max(...dp[N - 1]);
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(land));

// ! best
