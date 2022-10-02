const fib = (n) => {
  let dp = [0, 1];

  if (n === 0 || n === 1) return dp[n];

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

console.log(fib(3));
