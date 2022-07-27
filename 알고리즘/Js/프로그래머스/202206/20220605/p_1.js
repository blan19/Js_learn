// * 프로그래머스

// ! 인풋
// const priorities = [2, 1, 3, 2];
// const location = 2;

const priorities = [1, 1, 9, 1, 1, 1];
const location = 0;

// ! 솔루션
function solution(priorities, location) {
  let answer = [];
  let stk = priorities.map((prior, idx) => [prior, idx]);
  while (stk.length) {
    let first = [...stk[0]];
    if (stk.some((el) => first[0] < el[0])) {
      stk.shift();
      stk.push(first);
    } else {
      answer.push(stk.shift());
    }
  }
  return answer
    .map((el, idx) => [...el, idx + 1])
    .filter((el) => el[1] === location)
    .flat()[2];
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(priorities, location));

// ! best
