// * 프로그래머스

// ! 인풋
const str_1 = "ACAYKP",
  str_2 = "CAPCAK";

// ! 솔루션
function solution(str_1, str_2) {
  const N = str_1.length;
  const M = str_2.length;
  let dp = Array.from(Array(M + 1), () => Array.from(Array(N + 1)).fill(0));

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      if (str_2[j] === str_1[i]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[N][M];
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(str_1, str_2));

// ! best
