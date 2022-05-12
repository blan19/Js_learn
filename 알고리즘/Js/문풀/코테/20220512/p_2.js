// * 내적

const a = [1, 2, 3, 4];
const b = [-3, -1, 0, 2];

function solution(a, b) {
  let idx = 0;
  const answer = a.reduce((prev, cur) => prev + cur * b[idx++], 0);
  return answer;
}

console.log(solution(a, b));
