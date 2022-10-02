const climbStairs = (n) => {
  const dp = [0, 1, 2];
  if (n === 1 || n === 2) return dp[n];
  for (let i = 3; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];
  return dp[n];
};

console.log(climbStairs(3));
