// * 프로그래머스

// ! 인풋
const n = 3,
  computers = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ];

// const n = 3,
//   computers = [
//     [1, 1, 0],
//     [1, 1, 1],
//     [0, 1, 1],
//   ];

// const n = 4,
//   computers = [
//     [1, 1, 0, 1],
//     [1, 1, 0, 0],
//     [0, 0, 1, 1],
//     [1, 0, 1, 1],
//   ];

// ! 솔루션
function solution(n, computers) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => []);
  let visited = Array.from(Array(n + 1)).fill(false);
  visited[0] = true;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      if (computers[i][j] !== 0) graph[i + 1].push(j + 1);
    }
  }

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      answer++;
      dfs(i);
    }
  }

  function dfs(pos) {
    for (let i = 0; i < graph[pos].length; i++) {
      const npos = graph[pos][i];
      if (visited[npos]) continue;
      visited[npos] = true;
      dfs(npos);
    }
  }

  return answer;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(n, computers));

// ! best
