// * 프로그래머스

// ! 인풋
// const n = 6;
const n = 10;

// ! 솔루션
function solution(n) {
  let answer = [];
  while (n) {
    const val = n % 3;
    if (val === 0) {
      const temp = n / 3 - 1;
      answer.push(4);
      n = Math.floor(temp);
    } else {
      answer.push(val);
      n = Math.floor(n / 3);
    }
  }
  return answer.reverse().join("");
}

// ! 주의사항

// ! 로직
// * 3진법
// * 3의 배수?
// * 012/ 123

// * 3으로 나누어 떨어지면 몫에서 - 1 하고 나머지

// ! 아웃풋
console.log(solution(n));

// ! best
// function change124(n) {
//   return n === 0
//     ? ""
//     : change124(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
// }

// function change124(n) {
//   var answer = "";
//   var array1_2_4 = new Array(4, 1, 2); //3%3 = 0, 1%3 = 1, 2%3 = 2

//   while (n) {
//     answer = array1_2_4[n % 3] + answer;
//     n = Math.floor((n - 1) / 3);
//   }

//   return answer;
// }
