// * 프로그래머스

// ! 인풋
const a = 3;
const b = 5;

// ! 솔루션
function solution(a, b) {
  let arr = [a, b];
  let answer = 0;
  arr.sort((a, b) => a - b);
  for (let i = arr[0]; i <= arr[1]; i++) {
    answer += i;
  }
  return answer;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(a, b));

// ! best
