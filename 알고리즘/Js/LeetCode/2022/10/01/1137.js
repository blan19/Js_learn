const tribonacci = function (n) {
  const dp = [0, 1, 1];
  if (n === 0 || n === 1 || n === 2) dp[n];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  return dp[n];
};

console.log(tribonacci(4));
