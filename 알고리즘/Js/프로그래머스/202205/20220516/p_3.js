// * 프로그래머스 - 나머지가 1이 되는 수 찾기

// ! 인풋
const n = 10;

// ! 솔루션
function solution(n) {
  let answer = [];
  for (let i = 2; i < n; i++) {
    if (n % i === 1) {
      answer.push(i);
    }
  }
  return answer.sort((a, b) => a - b)[0];
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(n));

// ! best
