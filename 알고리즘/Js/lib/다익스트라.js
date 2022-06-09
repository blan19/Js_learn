function bfs(graph, vertex, N, K) {
  let dijkstra = Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
  let queue = [],
    idx = 0;
  queue.push(vertex);
  dijkstra[1] = 0;
  while (queue.length != idx) {
    const pos = queue[idx++];
    for (const adj in graph[pos]) {
      const cnt = graph[pos][adj];
      if (dijkstra[adj] > dijkstra[pos] + cnt) {
        dijkstra[adj] = dijkstra[pos] + cnt;
        queue.push(adj);
      }
    }
  }
  return dijkstra.filter((val) => val <= K).length;
}
