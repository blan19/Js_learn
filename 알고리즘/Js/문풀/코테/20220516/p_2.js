// * 프로그래머스 - 최소직사각형

// ! 인풋
// const sizes = [
//   [60, 50],
//   [30, 70],
//   [60, 30],
//   [80, 40],
// ];

// const sizes = [
//   [10, 7],
//   [12, 3],
//   [8, 15],
//   [14, 7],
//   [5, 15],
// ];

const sizes = [
  [14, 4],
  [19, 6],
  [6, 16],
  [18, 7],
  [7, 11],
];

// ! 솔루션
function solution(sizes) {
  let width = [];
  let height = [];
  sizes.forEach((size) => size.sort((a, b) => b - a));
  sizes.forEach((size) => {
    width.push(size[0]);
    height.push(size[1]);
  });
  width.sort((a, b) => b - a);
  height.sort((a, b) => b - a);
  return width[0] * height[0];
}

// ! 주의사항

// ! 로직
// * 1. 먼저 w,h을 픽한다 그리고 배열 길이에 맞춰 비교를 시작한다
// * 2.

// ! 아웃풋
console.log(solution(sizes));

// ! best

// function solution(sizes) {
//   const [hor, ver] = sizes.reduce(
//     ([h, v], [a, b]) => [
//       Math.max(h, Math.max(a, b)),
//       Math.max(v, Math.min(a, b)),
//     ],
//     [0, 0]
//   );
//   return hor * ver;
// }

// function solution(sizes) {
//   const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

//   let maxSize = [0, 0];
//   rotated.forEach(([w, h]) => {
//     if (w > maxSize[0]) maxSize[0] = w;
//     if (h > maxSize[1]) maxSize[1] = h;
//   });
//   return maxSize[0] * maxSize[1];
// }
