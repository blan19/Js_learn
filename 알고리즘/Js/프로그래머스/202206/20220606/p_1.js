// * 프로그래머스

// ! 인풋
// const n = 6,
// times = [7, 10];

const n = 6,
  times = [3, 7, 10];

// ! 솔루션
function solution(n, times) {
  let N = n;
  let [l, r] = [1, Math.max(...times) * N];
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const cnt = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);
    if (cnt < n) l = mid + 1;
    else r = mid - 1;
  }
  return l;
}

// function solution(n, times) {
//   let N = n;
//   const supervisor = times.map((time) => [0, time, time]);
//   while (N--) {
//     supervisor.sort((a, b) => a[1] - b[1])[0] = [
//       supervisor[0][1],
//       supervisor[0][1] + supervisor[0][2],
//       supervisor[0][2],
//     ];
//   }
//   return supervisor[0][0];
// }
// ! 주의사항
// * solution 함수에 전달되는 lines 배열은 N(1 ≦ N ≦ 2,000)개의 로그 문자열

// ! 로직

// ! 아웃풋
console.log(solution(n, times));

// ! best
