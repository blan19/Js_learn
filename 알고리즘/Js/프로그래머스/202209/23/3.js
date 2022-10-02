// * 프로그래머스

// ! 인풋

// ! 솔루션
function solution(n, results) {
  let answer = 0;
  const graph = Array.from({ length: n + 1 }, () => []);
  let visited = Array.from({ length: n + 1 }, () => false);
  const result = Array.from({ length: n + 1 }, () => [0, 0]);

  results.forEach(([win, loss]) => graph[win].push(loss));

  for (let i = 1; i <= n; i++) {
    visited.fill(false);
    dfs(i, visited, graph, i, result);
  }

  for (const [win, loss] of result) {
    if (win + loss === n - 1) answer++;
  }

  return answer;
}

function dfs(start, visited, graph, win, result) {
  visited[start] = true;
  for (const v of graph[start]) {
    if (!visited[v]) {
      result[win][0]++;
      result[v][1]++;
      dfs(v, visited, graph, win, result);
    }
  }
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(
  solution(5, [
    [4, 3],
    [4, 2],
    [3, 2],
    [1, 2],
    [2, 5],
  ])
);

// ! best
