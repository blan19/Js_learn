// * 프로그래머스

// ! 인풋
const n = 5;

// ! 솔루션
function solution(n) {
  const dp = Array.from(Array(n)).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i < n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 1234567;
  }

  return dp[n - 1];
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(n));

// ! best
