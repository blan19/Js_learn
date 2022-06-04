// * 프로그래머스

// ! 인풋
const arr = [1, 2, 3, 4];

// ! 솔루션
function solution(arr) {
  let answer = arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
  return answer;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(arr));

// ! best
