// * 프로그래머스

// ! 인풋
const n = 4;

// ! 솔루션
function solution(n) {
  const str = "수박";
  const mid = Math.floor(n / 2);
  if (n === 1) {
    return "수";
  }
  return n % 2 === 0 ? str.repeat(mid) : `${str.repeat(mid)}수`;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(n));

// ! best
