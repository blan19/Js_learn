// 최적의 행렬 곱셈

function solution(p) {
  const n = p.length;
  const dp = new Array(n).fill().map((_) => new Array(n).fill(Infinity));

  dp.forEach((_, idx) => (dp[idx][idx] = 0));

  for (let limit = 0; limit < n - 1; limit++) {
    for (let i = 0; i < n; i++) {
      const j = limit + i + 1;
      if (j >= n) break;
      for (let k = i; k < j; k++) {
        dp[i][j] = Math.min(
          dp[i][j],
          dp[i][k] + dp[k + 1][j] + p[i][0] * p[k + 1][0] * p[j][1]
        );
      }
    }
  }
  return dp[0][n - 1];
}
