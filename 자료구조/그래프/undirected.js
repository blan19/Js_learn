class UndirectedGraph {
  // 간선을 저장하기 위한 정점 객체 초기화
  constructor() {
    this.edges = {};
  }
  // edges 객체 내에 객체 형태로 정점을 저장
  addVertex(vertex) {
    this.edges[vertex] = {};
  }
  // 가중치가 없을 경우 0, 있을 경우 가중치를 따로 주며 edges 객체의 양쪽 정점을 사용해 가중치를 저장한다.
  addEdge(vertexA, vertexB, weight = 0) {
    this.edges[vertexA][vertexB] = weight;
    this.edges[vertexB][vertexA] = weight;
  }
  // 정점의 유무를 확인하고 간선을 삭제한다.
  removeEdge(vertexA, vertexB) {
    if (this.edges[vertexA] && this.edges[vertexA][vertexB])
      delete this.edges[vertexA][vertexB];
    if (this.edges[vertexB] && this.edges[vertexB][vertexA])
      delete this.edges[vertexB][vertexA];
  }
  // 정점을 삭제한다.
  // 중요한 점은 정점이 삭제될 때마다 해당 간선과 연결된 모든 간선도 삭제돼야 한다는 것.
  removeVertex(vertex) {
    for (const adjVertex in this.edges[vertex]) {
      this.removeEdge(adjVertex, vertex);
    }
    delete this.edges[vertex];
  }
}

const undirectedGraph = new UndirectedGraph();
undirectedGraph.addVertex(1);
undirectedGraph.addVertex(2);
undirectedGraph.addEdge(1, 2);
console.log(undirectedGraph);
