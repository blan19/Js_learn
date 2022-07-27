// * 소수 만들기
const nums = [1, 2, 7, 6, 4];

function solution(nums) {
  let answer = 0;

  const combination = (arr, selectNum) => {
    const result = [];
    if (selectNum === 1) return arr.map((v) => [v]);
    arr.forEach((v, idx, arr) => {
      const fixed = v;
      const restArr = arr.slice(idx + 1);
      const combinationArr = combination(restArr, selectNum - 1);
      const combineFix = combinationArr.map((v) => [fixed, ...v]);
      result.push(...combineFix);
    });
    return result;
  };

  const isPrime = (number) => {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.ceil(Math.sqrt(number)); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };

  const arr = combination(nums, 3);

  arr.forEach((numbers) => {
    const sum = numbers.reduce((prev, cur) => prev + cur, 0);
    if (isPrime(sum)) {
      answer++;
    }
  });
  return answer;
}

console.log(solution(nums));
