// * 프로그래머스

// ! 인풋
// * 1
// const N = 5;
// const road = [
//   [1, 2, 1],
//   [2, 3, 3],
//   [5, 2, 2],
//   [1, 4, 2],
//   [5, 3, 1],
//   [5, 4, 2],
// ];
// const K = 3;

// * 2
const N = 6;
const road = [
  [1, 2, 1],
  [1, 3, 2],
  [2, 3, 2],
  [3, 4, 3],
  [3, 5, 2],
  [3, 5, 3],
  [5, 6, 1],
];
const K = 4;

// ! 솔루션
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
  return bfs(graph, "1", N, K);
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(N, road, K));

// ! best
