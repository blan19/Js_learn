// * 프로그래머스

// ! 인풋
const n = 12;
// const n = 5;

// ! 솔루션
function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(n));

// ! best
