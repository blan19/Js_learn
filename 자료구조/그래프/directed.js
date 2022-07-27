class DirectedGraph {
  constructor() {
    this.edges = {};
  }
  // 정점을 추가하는 방법은 무지향성 그래프와 같다
  addVertex(vertex) {
    this.edges[vertex] = {};
  }
  // 방향이 있는 그래프이므로 원점에서 출발해 도착점이 되는 정점에서 끝난다.
  // 그래서 간선과 가중치를 원점이 되는 정점에만 설정해준다.
  addEdges(origin, dest, weight = 0) {
    this.edges[origin][dest] = weight;
  }
  // 지향성 그래프에서 정점과 간선을 삭제하는 코드는 원점이 되는 정점만을 삭제해야 한다는 점만 다르다.
  removeEdge(origin, dest) {
    if (this.edges[origin] && this.edges[origin][dest])
      delete this.edges[origin][dest];
  }
  removeVertex(vertex) {
    for (const adj in this.edges[vertex]) this.removeEdge(adj, vertex);
    delete this.edges[vertex];
  }
}

const directed = new DirectedGraph();
directed.addVertex("준서");
directed.addVertex("효원");
directed.addVertex("저스틴 비버");
directed.addEdges("준서", "효원", 100);
directed.removeVertex("준서");
console.log(directed);
