// // let max = 0;
// const arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }

// // 자바스크립트 내장 객체 사용
// const max = Math.floor(Math.max(...arr));

// console.log(max);

const solution = (value, per) => {
  const percent = per / 100;
  return value * percent;
};

console.log(solution(1000000, 25));
