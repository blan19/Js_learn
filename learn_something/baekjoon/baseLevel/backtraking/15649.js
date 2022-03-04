const fs = require("fs");

const dfs = (cnt) => {
  if (cnt === M) {
    console.log(array.join(" "));
    return;
  }
  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      array[cnt] = i;
      dfs(cnt + 1);
      visited[i] = false;
    }
  }
};

let input = fs
  .readFileSync(
    "/Users/parkjunseo/Desktop/VSC/Js_learn/js/baekjoon/example.txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map((element) => Number(element));
const N = input[0];
const M = input[1];
const visited = new Array(N + 1).fill(false);
const array = [];
dfs(0);
