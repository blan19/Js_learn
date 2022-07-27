// * 프로그래머스

// ! 인풋
const list = [
  [1, 5],
  [2, 3],
  [4, 5],
  [2, 3],
  [5, 2],
];
const limit = 10;

// ! 솔루션
function solution(list, limit) {
  const N = list.length;
  const dp = Array.from(Array(N + 1), () =>
    Array.from(Array(limit + 1).fill(0))
  );

  for (let i = 1; i <= N; i++) {
    const [weight, value] = list[i - 1];
    for (let j = 1; j <= limit; j++) {
      if (weight <= j) {
        dp[i][j] = Math.max(dp[i - 1][j - weight] + value, dp[i - 1][j]);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[N][limit];
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(list, limit));

// ! best
