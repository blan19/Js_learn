// * 프로그래머스

// ! 인풋
const n = 121;
// const n = 3;

// ! 솔루션
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(n));

// ! best
