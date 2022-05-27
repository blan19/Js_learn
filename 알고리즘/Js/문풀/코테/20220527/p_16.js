// * 프로그래머스

// ! 인풋
const n = 5;
const m = 3;

// ! 솔루션
function solution(n, a) {
  const answer = Array.from(Array(a)).fill("*".repeat(n)).join("\n");
  console.log(answer);
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(n, m));

// ! best
