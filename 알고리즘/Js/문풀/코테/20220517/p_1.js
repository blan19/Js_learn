// * 프로그래머스

// ! 인풋
// const s = "abcde";
const s = "qwer";

// ! 솔루션
function solution(s) {
  let answer = "";
  const mid = Math.floor(s.length / 2);
  if (s.length % 2 === 0) {
    answer += s[mid - 1] + s[mid];
  } else {
    answer += s[mid];
  }
  return answer;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(s));

// ! best
