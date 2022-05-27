// * 프로그래머스

// ! 인풋
const n = 12345;

// ! 솔루션
function solution(n) {
  let answer = String(n)
    .split("")
    .reverse()
    .map((char) => +char);
  return answer;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(n));

// ! best
