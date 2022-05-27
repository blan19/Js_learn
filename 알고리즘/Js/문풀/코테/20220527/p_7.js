// * 프로그래머스

// ! 인풋
const arr = [4, 3, 2, 1];
// const arr = [10];
// const arr = [0, 1, 1, 1];

// ! 솔루션
function solution(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return [-1];
  }
  const temp = [...arr];
  let [min, ..._] = temp.sort((a, b) => a - b);
  let idx = arr.indexOf(min);
  return arr.filter((_, index) => index !== idx);
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(arr));

// ! best
