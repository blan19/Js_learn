// * 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";

// ! 인풋
const input = fs.readFileSync(filePath).toString().trim();
const N = +input;

// ! 솔루션
const solution = (N) => {
  let dp = [0, 1, 1];

  if (N < 3) {
    return dp[N];
  }

  for (let i = 3; i <= N; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[N];
};

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(N));

// ! best
