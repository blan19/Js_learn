// * 프로그래머스

// ! 인풋
const n = 45;

// ! 솔루션
const transform = (number, target) => {
  let n = "";
  while (target) {
    const temp = target % number;
    n += String(temp);
    target = Math.floor(target / number);
  }
  return n.split("").reverse();
};
function solution(n) {
  let answer = 0;
  const values = transform(3, n);
  values.forEach((val, idx, arr) => {
    const num = val * 3 ** idx;
    answer += num;
  });
  return answer;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(n));

// ! best

// const solution = (n) => {
//   return parseInt([...n.toString(3)].reverse().join(""), 3);
// };
