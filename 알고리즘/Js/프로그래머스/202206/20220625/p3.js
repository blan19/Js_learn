// * 프로그래머스

// ! 인풋
const n = 4;

// ! 솔루션
function solution(n) {
  let dp = [1, 1, 2];

  if (n <= 2) return dp[n];

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }

  return dp[n];
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(n));

// ! best
