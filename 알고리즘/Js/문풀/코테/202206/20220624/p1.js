// * 프로그래머스

// ! 인풋
const k = 80,
  dungeons = [
    [80, 20],
    [50, 40],
    [30, 10],
  ];

// ! 솔루션
function solution(k, d) {
  const N = d.length;
  const visited = new Array(N).fill(0);
  let ans = 0;

  function dfs(k, cnt) {
    ans = Math.max(cnt, ans);

    for (let j = 0; j < N; j++) {
      if (k >= d[j][0] && !visited[j]) {
        visited[j] = 1;
        dfs(k - d[j][1], cnt + 1);
        visited[j] = 0;
      }
    }
  }

  dfs(k, 0);
  return ans;
}

// function solution(k, dungeons) {
//   let answer = [];
//   const N = dungeons.length;
//   const per = permutation(
//     Array.from(Array(N))
//       .fill(0)
//       .map((_, idx) => idx),
//     N
//   );

//   per.forEach((idx) => {
//     let K = k;
//     let cnt = 0;
//     idx.forEach((val) => {
//       const limit = dungeons[val][0],
//         consume = dungeons[val][1];

//       if (limit <= K) {
//         cnt++;
//         K = K - consume;
//       }
//     });

//     answer.push(cnt);
//   });

//   return Math.max(...answer);
// }

// function permutation(arr, selectNum) {
//   let result = [];
//   if (selectNum === 1) return arr.map((v) => [v]);
//   arr.forEach((v, idx, arr) => {
//     const fixer = v;
//     const restArr = arr.filter((_, index) => index !== idx);
//     const permuationArr = permutation(restArr, selectNum - 1);
//     const combineFixer = permuationArr.map((v) => [fixer, ...v]);
//     result.push(...combineFixer);
//   });
//   return result;
// }

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(k, dungeons));

// ! best
