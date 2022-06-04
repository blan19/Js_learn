// * 약수의 개수와 덧셈

// ! 인풋
const left = 1;
const right = 3;

// ! 솔루션
function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let cnt = 0;
    if (i === 1) {
      cnt = 1;
    } else {
      cnt = 2;
    }
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        cnt++;
      }
    }
    if (cnt % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }
  return answer;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(left, right));

// ! best
// function solution(left, right) {
//   var answer = 0;
//   for (let i = left; i <= right; i++) {
//     if (Number.isInteger(Math.sqrt(i))) {
//       answer -= i;
//     } else {
//       answer += i;
//     }
//   }
//   return answer;
// }
