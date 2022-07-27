// * 프로그래머스

// ! 인풋
// const numbers = "17";
// const numbers = "011";
const numbers = "1231";

// ! 솔루션
const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  for (let i = 2; i <= Math.ceil(Math.sqrt(number)); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

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

function solution(numbers) {
  return Array.from(
    new Set(
      numbers
        .split("")
        .map((_, idx) =>
          permutation(numbers.split(""), idx + 1).map((el) => +el.join(""))
        )
        .flat()
    )
  ).filter((number) => isPrime(number)).length;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(numbers));

// ! best
