// * 프로그래머스

// ! 인풋
const n = 4;

// ! 솔루션
function solution(n) {
  return fibonacci(n);
}

const fibonacci = (n) => {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 1000000007;
  }

  return dp[n];
};

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(n));

// ! best

// function solution(n) {
//   let answer = 0;
//   const dp = [1, 2];

//   for (let i = 0; i < n; i++) {
//     dp.push((dp[i] + dp[i + 1]) % 1000000007);
//   }
//   return (answer = dp[n - 1]);
// }
