// ! 인풋

// ! 솔루션
function solution(n, edge) {
  const queue = [];
  let answer = {};
  let graph = {};
  let idx = 0;

  edge.forEach(([from, to]) => {
    if (graph[from]) graph[from].push(to);
    else graph[from] = [to];

    if (graph[to]) graph[to].push(from);
    else graph[to] = [from];
  });

  const visited = Array.from(
    { length: Object.keys(graph).length + 1 },
    () => false
  );

  queue.push([1, 0]);
  visited[1] = true;

  while (queue.length !== idx) {
    const [pos, level] = queue[idx++];

    for (const v of graph[pos]) {
      if (!visited[v]) {
        if (answer[level]) answer[level]++;
        else answer[level] = 1;
        visited[v] = true;
        queue.push([v, level + 1]);
      }
    }
  }

  return answer[Object.keys(answer).length - 1];
}

// ! 주의사항

// ! 로직

// ! 아웃풋
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

// ! best
