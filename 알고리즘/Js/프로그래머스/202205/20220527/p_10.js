// * 프로그래머스

// ! 인풋
// const n = 6;
// const n = 16;
const n = 626331;

// ! 솔루션
function solution(num) {
  let answer = 0;
  while (true) {
    if (num === 1) {
      break;
    }
    answer++;
    if (answer === 500) {
      answer = -1;
      break;
    }

    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
  }
  return answer;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(n));

// ! best
