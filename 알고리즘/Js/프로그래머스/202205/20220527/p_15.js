// * 프로그래머스

// ! 인풋
const x = 2;
const n = 5;

// ! 솔루션
function solution(x, n) {
  let answer = Array.from(Array(n)).map((_, idx) => (idx + 1) * x);
  return answer;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(x, n));

// ! best
