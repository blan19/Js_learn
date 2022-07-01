// * 프로그래머스

// ! 인풋
// const gems = [
//   "DIA",
//   "RUBY",
//   "RUBY",
//   "DIA",
//   "DIA",
//   "EMERALD",
//   "SAPPHIRE",
//   "DIA",
// ];

// const gems = ["A", "A", "A", "B", "B"];

// const gems = ["A"];

// const gems = ["A", "B", "B", "B", "B", "B", "B", "C", "B", "A"];

const gems = ["A", "B", "B", "C", "A", "B", "C", "A", "B", "C"];

// ! 솔루션
// function solution(gems) {
//   let answer = [];
//   const uniqueGems = Array.from(new Set(gems));
//   let min = Infinity;
//   gems.forEach((_, idx, origin) => {
//     let visited = Array.from(Array(gems.length)).fill(false);
//     let unique = [...uniqueGems];
//     const c = bfs(idx, min, origin, visited, unique);
//     if (c === false) return;
//     else {
//       const dist = Math.abs(c[0] - c[c.length - 1]);
//       if (min > dist) {
//         answer = c;
//         min = dist;
//       }
//     }
//   });

//   return [answer[0] + 1, answer[answer.length - 1] + 1];
// }

// function bfs(start, min, origin, visited, unique) {
//   let arr = [];
//   let queue = [start];
//   let idx = 0;

//   while (queue.length !== idx) {
//     const nPos = queue[idx++];
//     const exist = unique.indexOf(origin[nPos]);
//     const t = unique.filter((el) => el !== true).length;

//     // * 모든 종류의 젬이 있는지 확인하고 있다면 break
//     if (min <= promising(arr[0], arr[arr.length - 1]) + t) return false;
//     if (unique.every((el) => el === true)) break;
//     if (visited[nPos]) continue;
//     if (exist !== -1) unique[exist] = true;
//     visited[nPos] = true;
//     arr.push(nPos);

//     if (origin[nPos + 1]) queue.push(nPos + 1);
//     if (origin[nPos - 1]) queue.push(nPos - 1);
//   }

//   return arr.sort((a, b) => a - b);
// }

// function promising(start, end) {
//   return Math.abs(start - end);
// }

function solution(gems) {
  const size = new Set(gems).size;
  const uniqueGems = new Map();
  let answer = [1, gems.length];

  gems.forEach((gem, i) => {
    uniqueGems.delete(gem);
    uniqueGems.set(gem, i);
    if (uniqueGems.size === size) {
      const cand = [uniqueGems.values().next().value + 1, i + 1];
      answer = answer[1] - answer[0] > cand[1] - cand[0] ? cand : answer;
    }
  });

  return answer;
}

// ! 주의사항

// ! 로직
// * 중복 제거한 값을 취한다.
// * dfs/bfs를 돌면서 다이아를 모두 포함했는지 체크
// ? 최솟값을 카운트해서 적은 값은 아예 가지치기하면 좋지 않을까?

// * 투포인터를 사용해보자!
// *

// ! 아웃풋
console.log(solution(gems));

// ! best
