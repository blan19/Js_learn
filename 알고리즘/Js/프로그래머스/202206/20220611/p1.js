// * 프로그래머스

// ! 인풋
// const s = "1 2 3 4";
const s = "-1 -2 -3 -4";

// ! 솔루션
function solution(s) {
  let answer = s
    .split(" ")
    .map((el) => +el)
    .sort((a, b) => a - b);
  return [answer[0], answer[answer.length - 1]].join(" ");
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(s));

// ! best
