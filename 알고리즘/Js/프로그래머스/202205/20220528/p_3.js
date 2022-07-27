// * 프로그래머스

// ! 인풋
const w = 8;
const h = 12;
// 2
// const w = 4;
// const h = 4;
// 3
// const w = 1;
// const h = 1;

// ! 솔루션
function solution(w, h) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  return w * h - (w + h - gcd(w, h));
}
// function solution(w, h) {
//   let answer = 0;
//   let min, max;
//   if (w < h) {
//     min = w;
//     max = h;
//   } else {
//     min = h;
//     max = w;
//   }

//   if (max === 1 || (max === 1 && min === 1)) {
//     answer = 0;
//   } else {
//     answer = min * max - Math.floor(max / 3) * 4;
//   }
//   return answer;
// }

// ! 주의사항

// ! 로직
// * [0,0], [1,0], [1,1], [2,1] / [3,2], [4,2], [4,3], [5,3] / [6,4], [7,4], [7,5], [8,5]
// * 0 ~ 2까지 4개

// ! 아웃풋
console.log(solution(w, h));

// ! best
