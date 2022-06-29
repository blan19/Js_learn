const n = 3,
  k = 5;

function solution(n, k) {
  const per = permutation(
    Array.from(Array(n))
      .fill(0)
      .map((_, idx) => idx + 1),
    n
  );

  return per[k - 1];
}

function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);
  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });
  return result;
}

console.log(solution(n, k));
