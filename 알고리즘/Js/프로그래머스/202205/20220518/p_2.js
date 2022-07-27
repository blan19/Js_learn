// * 프로그래머스

// ! 인풋
const s = "Zbcdefg";

// ! 솔루션
function solution(s) {
  return s
    .split("")
    .sort((a, b) => b.charCodeAt() - a.charCodeAt())
    .join("");
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(s));

// ! best
