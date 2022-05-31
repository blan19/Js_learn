// * 프로그래머스

// ! 인풋
// const s = "baabaa";
const s = "cdcd";

// ! 솔루션
function solution(s) {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    if (answer.length) {
      const top = answer[answer.length - 1];
      top === s[i] ? answer.pop() : answer.push(s[i]);
    } else {
      answer.push(s[i]);
    }
  }
  return answer.length ? 0 : 1;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(s));

// ! best
