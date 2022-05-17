// * 프로그래머스

// ! 인풋
const arr = [5, 9, 7, 10];
const divisor = 5;

// ! 솔루션
function solution(arr, divisor) {
  let answer = [];
  arr.forEach((num) => {
    if (num % divisor === 0) {
      answer.push(num);
    }
  });
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(arr, divisor));

// ! best
