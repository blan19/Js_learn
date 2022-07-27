// * 프로그래머스

// ! 인풋
const n = 437674,
  k = 3;

// const n = 110011,
//   k = 10;

// const n = 524287,
//   k = 2;

// ! 솔루션
function solution(n, k) {
  return n
    .toString(k)
    .split(/0+/)
    .filter((val) => isPrime(+val)).length;
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(n, k));

// ! best
