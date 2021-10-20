/**
 * 먼저 행렬 곱셈의 기본은 A by B 크기인 행렬과 B by C 크기인 행렬 처럼 하나의 크기가 일치해야 가능함
 * 곱셈 연산의 결과로 도출되는 행렬의 크기는 A by C
 * 결국 행렬의 곱셈이 이루어지기 위해서는 두 행렬에서 일치하는 숫자가 무조건 존재해야 함으로
 * 행렬을 어떤 순서로 곱하든간에 상관없이 최종적으로 가질 수 있는 마지막 결합형태를 찾을 수 있다.
 *
 * 이를 토대로 결합형태의 가짓수는 항상 행렬의 개수 - 1을 만족함
 * 따라서 최소값은 위 4가지 결합형태에 해당하는 방법들 중에 가장 적은 곱셈 연산 횟수를 가진 것이 된다
 *
 * 점화식 : DP[i][j] = i번째 행렬부터 j번째 행렬까지 최소 연산 횟수
 * i번째에 n by m 행렬을 matrix[i][0] = n, matrix[i][1] = m
 * DP[i][j] = min(DP[i][k] + DP[k+1][j] + matrix[i][0] * matrix[k][1] * matrix[j][1]) (i<=k<j)
 */

// const solution = (p) => {
//   const n = p.length;
//   const dp = new Array(n).fill().map((_) => new Array(n).fill(Infinity));

//   // 초기화
//   for (let i = 0; i < n; i++) {
//     dp[i][i] = 0;
//   }

//   // 행렬 결합은 n-1만큼 경우의 수가 있기 때문에 n-1까지 탐색
//   for (let i = 1; i < n; i++) {
//     for (let start = 0; start < n; start++) {
//       const j = start + i;
//       // 행렬 범위를 넘어가면 종료
//       if (j >= n) break;

//       for (let k = start; k < j; k++) {
//         // 점화식 M[i][j] = min(M[i][k] + M[k+1][j] + p[i-1]*p[k]*p[j])
//         dp[start][j] = Math.min(
//           dp[start][j],
//           dp[start][k] + dp[k + 1][j] + p[start][0] * p[k + 1][0] * p[j][1]
//         );
//       }
//     }
//   }

//   return dp[0][n - 1];
// };

// console.log(
//   solution([
//     [4, 3],
//     [3, 2],
//     [2, 5],
//     [5, 1],
//     [1, 3],
//   ])
// );

const MatrixChainMultiple = (p) => {
  const n = p.length;
  const dp = new Array(n).fill().map((_) => new Array(n).fill(Infinity));

  dp.forEach((_, idx) => (dp[idx][idx] = 0));

  for (let limit = 0; limit < n - 1; limit++) {
    for (let i = 0; i < n; i++) {
      const j = limit + i + 1;
      if (j >= n) break;
      for (let k = i; k < j; k++) {
        // 점화식 M[i][j] = min(M[i][k] + M[k+1][j] + p[i-1]*p[k]*p[j])
        dp[i][j] = Math.min(
          dp[i][j],
          dp[i][k] + dp[k + 1][j] + p[i][0] * p[k + 1][0] * p[j][1]
        );
      }
    }
  }
  return dp[0][n - 1];
};

console.log(
  MatrixChainMultiple([
    [4, 3],
    [3, 2],
    [2, 5],
    [5, 1],
    [1, 3],
  ])
);
