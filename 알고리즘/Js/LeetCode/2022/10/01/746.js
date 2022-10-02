const minCostClimbingStairs = (cost) => {
  const dp = [cost[0], cost[1]];
  if (cost.length <= 2) return Math.min(...cost);
  for (let i = 2; i < cost.length; i++) {
    const min = Math.min(dp[i - 1], dp[i - 2]);
    dp[i] = min + cost[i];
  }
  return Math.min(dp[dp.length - 1], dp[dp.length - 2]);
};

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
