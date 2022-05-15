// * 프로그래머스

// ! 인풋
// const d = [1, 3, 2, 5, 4];
// const budget = 9;
const d = [2, 2, 3, 3];
const budget = 10;

// ! 솔루션
function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    if (d[i] <= budget) {
      budget -= d[i];
      answer++;
    } else {
      break;
    }
  }
  return answer;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(d, budget));

// ! best
