const list = [
  [1, 5],
  [2, 3],
  [4, 5],
  [2, 3],
  [5, 2],
];
target = 10;

const weigths = list.map((val) => val[0]),
  values = list.map((val) => val[1]);

function knapsackNaive(index, weights, values, target) {
  let answer = 0;

  if (index <= -1 || target <= 0) answer = 0;
  else if (weights[index] > target)
    knapsackNaive(index - 1, weights, values, target);
  else {
    const current = knapsackNaive(index - 1, weights, values, tartet);
    const currentPlusOther =
      values[index] +
      knapsackNaive(index - 1, weights, values, tartet - weights[index]);
    answer = Math.max(current, currentPlusOther);
  }

  return answer;
}

function knapsackDP(index, weights, values, target, matrix) {
  let answer = 0;

  if (matrix[`${index}-${target}`]) return matrix[`${index}-${target}`];

  if (index <= -1 || target <= 0) answer = 0;
  else if (weights[index] > target)
    knapsackDP(index - 1, weights, values, target, matrix);
  else {
    const current = knapsackDP(index - 1, weights, values, target, matrix);
    const currentPlusOther =
      values[index] +
      knapsackDP(index - 1, weights, values, target - weights[index], matrix);
    answer = Math.max(current, currentPlusOther);
  }
  matrix[`${index}-${target}`] = answer;
  return answer;
}

function knapsackBottomUp(weights, values, target) {
  const N = weights.length;
  let dp = Array.from(Array(N + 1), () => Array.from(Array(N + 1)).fill(0));
  console.log(dp);
  return;
}

// console.log(knapsackDP(weigths.length - 1, weigths, values, target, {}));
console.log(knapsackBottomUp(weigths, values, target));
