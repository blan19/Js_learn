// * 프로그래머스

// ! 인풋
const n = 123;

// ! 솔루션
function solution(n) {
  let answer = String(n)
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
  return answer;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(n));

// ! best
