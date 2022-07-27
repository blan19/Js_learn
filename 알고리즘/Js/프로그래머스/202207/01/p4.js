// * 프로그래머스

// ! 인풋
// const jobs = [
//   [0, 3],
//   [1, 9],
//   [2, 6],
// ];

const jobs = [
  [24, 10],
  [28, 39],
  [43, 20],
  [37, 5],
  [47, 22],
  [20, 47],
  [15, 34],
  [15, 2],
  [35, 43],
  [26, 1],
];
// ? 72

// const jobs = [
//   [0, 5],
//   [2, 10],
//   [10000, 2],
// ];
// // ? 6

// const jobs = [
//   [0, 10],
//   [4, 10],
//   [15, 2],
//   [5, 11],
// ];
// // ? 15

// ! 솔루션
// function solution(jobs) {
//   const n = jobs.length;
//   let min = Infinity;
//   let visited = Array.from(Array(n + 1)).fill(false);
//   let arr = Array.from(Array(n)).fill(0);

//   dfs(0, n, arr, visited, jobs);

//   function dfs(depth, n, arr, visited, origin) {
//     if (depth === n) {
//       const updateMin = calcMin(arr, origin);
//       min = Math.min(updateMin, min);
//       return;
//     }

//     for (let i = 1; i <= n; i++) {
//       if (visited[i]) continue;
//       arr[depth] = i;
//       visited[i] = true;
//       dfs(depth + 1, n, arr, visited, origin);
//       visited[i] = false;
//     }
//   }

//   function calcMin(arr, origin) {
//     const n = arr.length;
//     let t = [];
//     let prev = 0;

//     arr.forEach((el, idx) => {
//       const [start, end] = origin[el - 1];
//       prev += end;
//       if (idx === 0) t.push(end - start);
//       else {
//         t.push(prev - start);
//       }
//     });

//     return Math.floor(t.reduce((acc, cur) => acc + cur, 0) / n);
//   }

//   return min;
// }

function solution(jobs) {
  const s = jobs.map((el) => el.slice());
  let prev = 0;
  let answer = [];
  let target = 0;
  let f = 0;

  s.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  while (s.length) {
    // * 값을 저장하는 과정
    const cur = s.splice(target, 1);
    const [req, con] = cur[0];
    prev += con;
    answer.push(prev - req);

    // * 소요 시간 보다 같거나 적은 값들이 있는지
    const filtered = [];
    s.forEach((el, idx) => {
      if (f >= el[0]) filtered.push([...el, idx]);
    });

    // * 값이 존재한다면
    if (filtered.length) {
      // console.log(filtered);
      filtered.sort((a, b) => a[1] - b[1]);
      const [, , idx] = filtered[0];
      target = idx;
      f = con;
      continue;
    }

    // * 존재하지 않는 경우
    s.sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1] - b[1];
      }
      return a[0] - b[0];
    });
    target = 0;
  }

  return Math.floor(answer.reduce((acc, cur) => acc + cur, 0) / answer.length);
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(jobs));

// ! best
