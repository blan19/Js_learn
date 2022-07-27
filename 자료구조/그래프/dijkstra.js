const N = 5,
  road = [
    [1, 2, 1],
    [2, 3, 3],
    [5, 2, 2],
    [1, 4, 2],
    [5, 3, 1],
    [5, 4, 2],
  ],
  K = 3;

function dijkstra(graph, start) {
  let Q = {},
    dist = {};

  for (const vertex in graph) {
    dist[vertex] = Infinity;
    Q[vertex] = graph[vertex];
  }

  dist[start] = 0;

  while (Object.keys(Q).length !== 0) {
    const u = extractMin(Q, dist);

    delete Q[u];

    for (const adj in graph[u]) {
      const alt = dist[u] + graph[u][adj];

      if (alt < dist[adj]) {
        dist[adj] = alt;
      }
    }
  }

  return dist;
}

function extractMin(queue, dist) {
  let minDistance = Infinity,
    nodeWithMinDistance = null;

  for (const node in queue) {
    if (dist[node] <= minDistance) {
      minDistance = dist[node];
      nodeWithMinDistance = node;
    }
  }

  return nodeWithMinDistance;
}

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

function solution(N, road, K) {
  let graph = {};
  road.forEach((data) => {
    const [vertexA, vertexB, weight] = data;
    if (
      graph[vertexA] &&
      graph[vertexA][vertexB] &&
      graph[vertexA][vertexB] < weight
    ) {
    } else {
      graph[vertexA] = {
        ...graph[vertexA],
        [vertexB]: weight,
      };
      graph[vertexB] = {
        ...graph[vertexB],
        [vertexA]: weight,
      };
    }
  });

  console.log(dijkstra(graph, "1"));

  return bfs(graph, "1", N, K);
}

console.log(solution(N, road, K));
