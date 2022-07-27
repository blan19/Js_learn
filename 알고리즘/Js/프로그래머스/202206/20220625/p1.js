// * 프로그래머스

// ! 인풋
const n = 3,
  k = 5;

// ! 솔루션
function solution(n, k) {
  let answer = [];
  const number = Array.from(Array(n))
    .fill(0)
    .map((_, idx) => idx + 1);
  let K = k - 1;

  let dp = [];
  dp[0] = 1;
  dp[1] = 1;

  while (n > 0) {
    const f = factorial(n - 1, dp);
    const idx = Math.floor(K / f);
    K = K % f;
    answer.push(number[idx]);
    number.splice(idx, 1);
    n--;
  }

  return answer;
}

function factorial(n, dp) {
  if (dp[n]) return dp[n];
  if (n <= 1) return 1;
  dp[n] = n * factorial(n - 1, dp);
  return dp[n];
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(n, k));

// ! best
