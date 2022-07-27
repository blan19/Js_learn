// * 프로그래머스

// ! 인풋
const n = 118372;

// ! 솔루션
function solution(n) {
  let answer = String(n)
    .split("")
    .map((char) => +char)
    .sort((a, b) => b - a)
    .join("");
  return Number(answer);
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(n));

// ! best
