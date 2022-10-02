// * 가장 먼 노드

const bfs = (start, graph, visited, answer) => {
  const queue = [];
  let idx = 0;

  queue.push([start, 1]);
  visited[start] = 1;

  while (idx !== queue.length) {
    const [pos, level] = queue[idx++];

    for (const v of graph[pos]) {
      if (!visited[v]) {
        visited[v] = level + 1;
        answer[level + 1].push(v);
        queue.push([v, level + 1]);
      }
    }
  }
};

const solution = (n, edge) => {
  const answer = Array.from({ length: n + 1 }, () => []);
  const graph = Array.from({ length: n + 1 }, () => []);
  const visited = Array(n + 1).fill(0);

  edge.forEach(([to, from]) => {
    graph[to].push(from);
    graph[from].push(to);
  });

  bfs(1, graph, visited, answer);

  return answer.filter((v) => v.length).pop().length;
};

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
