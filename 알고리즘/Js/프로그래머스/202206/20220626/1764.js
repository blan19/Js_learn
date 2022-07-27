// * 백준
// const fs = require("fs");
// const filePath =
//   process.platform === "linux" ? "/dev/stdin" : "../../input.txt";

// // ! 인풋
// const input = fs.readFileSync(filePath).toString().split("\n");
// const [[N, _, M], ...list] = input;

// // ! 솔루션
// const print = (arr) => {
//   console.log(arr.length + "\n" + arr.join("\n"));
// };

// const solution = (N, M, list) => {
//   const set = new Set();
//   const answer = [];

//   for (let i = 0; i < +N + +M; i++) {
//     if (i < +N) set.add(list[i]);
//     else if (i > N && set.has(list[i])) answer.push(list[i]);
//   }

//   answer.sort((a, b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;
//     return 0;
//   });

//   print(answer);
// };

// ! 주의사항

// ! 로직
solution(N, M, list);

// ! 아웃풋

// ! best

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/);
const n = +input[0];
const m = +input[1];
const n_arr = input.slice(2, n + 2);
const m_arr = input.slice(n + 2);

function binary_search(arr, name) {
  let high = arr.length - 1;
  let low = 0;
  let mid;

  while (low <= high) {
    mid = Math.floor((high + low) / 2);
    if (arr[mid] > name) high = mid - 1;
    else if (arr[mid] < name) low = mid + 1;
    else return true;
  }
  return false;
}
const [long, short] =
  n_arr.length > m_arr.length ? [n_arr, m_arr] : [m_arr, n_arr];
long.sort();
const dbj = short.filter((name) => binary_search(long, name));

console.log(dbj.length + "\n" + dbj.sort().join("\n"));
