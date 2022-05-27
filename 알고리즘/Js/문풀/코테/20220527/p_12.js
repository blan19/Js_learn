// * 프로그래머스

// ! 인풋
// const x = 10;
const x = 11;

// ! 솔루션
function solution(x) {
  let answer =
    x %
      String(x)
        .split("")
        .map((char) => +char)
        .reduce((acc, cur) => acc + cur, 0) ===
    0
      ? true
      : false;
  return answer;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(x));

// ! best
