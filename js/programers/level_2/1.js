// 배달

const arr = [
  [1, 2, 1],
  [2, 3, 3],
  [5, 2, 2],
  [1, 4, 2],
  [5, 3, 1],
  [5, 4, 2],
];

const solution = (N, road, K) => {
  const dist = Array(N + 1).fill(Infinity);
  const adj = Array.from({ length: N + 1 }, () => []);

  console.log(dist);
  console.log(adj);
};

console.log(solution(5, arr, 3));

// 그래프
// 힙에 루트 저장
// 디익스트라 알고리즘

// class Graph {
//   constructor(edge) {
//     this.edge = edge;
//   }
// }

// console.log(solution(arr));

/**
 * @다익스트라알고리즘
 * 1. 모든 꼭지점을 미방문 상태로 초기화한다
 * 2. 시작 정점을 정한다
 * 3. 시작정점 A를 방문상태로 처리한다 (시작 정점을 A라고 가정).
 * 4. 정점 A에 인접한 정점으로 가는 모든 거리 값을 기록
 * 5. 정점 A에 각각의 인접 정점과 연결된 거리 중에서, 최단 거리를 갖는 정점을 찾느다 (최소 가중치 탐색)
 * 6. 최단 거리를 갖은 경로를 통해 다음 정점으로 이동
 * 7. 이동 거리를 기록
 * 8. 다음 정점을 B라고 가정하면, 정점 B에 인접한 정점으로 가는 모든 거리 값에 이동거리를 더한 값
 * (B에 인접한 각 정점들의 가중치 + 이동거리와 *5에서 기록한 최단거리 값을 서로 비교한다 이때 최소 값을 갖는 거리를 기록)
 * 9. 정점 B를 방문상태로 처리
 * 10. 모든 정점이 방문 상태가 될 때까지 *1-*9과정을 반복
 *
 * 시간 복잡도는 O(N^2)지만, 힙을 사용하면 O(NlogN)
 */
