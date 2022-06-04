// * 프로그래머스

// ! 인풋
const s = "-1234";

// ! 솔루션
function solution(s) {
  const minus = "-";
  return s.includes(minus) ? -Number(s.slice(1)) : Number(s);
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(s));

// ! best

// 48 57
