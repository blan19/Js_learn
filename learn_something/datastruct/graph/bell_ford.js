const V = 8,
  E = 14;
const INF = 987654321;
const g = Array.from(Array(V + 1), () => Array());

const data = [
  [1, 2, 8],
  [1, 3, 9],
  [1, 5, 11],
  [2, 4, 10],
  [3, 2, -15],
  [3, 4, 1],
  [3, 5, 3],
  [4, 8, 2],
  [5, 6, 8],
  [5, 7, 8],
  [6, 7, -7],
  [7, 3, 12],
  [7, 8, 5],
  [8, 6, 4],
];

for (let i = 0; i < data.length; i += 1) {
  const [from, to, weight] = data[i];
  g[from].push([to, weight]);
}

const BellmanFord = (graph, begin) => {
  const dist = Array(V + 1).fill(INF);
  let update;

  dist[begin] = 0;
  // 정점 순회
  for (let iter = 1; iter <= V; iter += 1) {
    update = false;
    // 간선들을 순회
    for (let curr = 1; curr <= V; curr += 1) {
      for (let i = 0; i < graph[curr].length; i += 1) {
        const [next, weight] = graph[curr][i];
        if (dist[next] > dist[curr] + weight) {
          dist[next] = dist[curr] + weight;
          update = true;
        }
      }
    }
    if (!update) break;
  }
  // 음수 사이클이 존재하는 경우
  if (update) {
    console.log("Negative cycle exist!");
    return;
  }
};

BellmanFord(g, 1);
