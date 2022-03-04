class UndirectedGraph {
  constructor() {
    this.edges = {};
  }

  addVertex(vertex) {
    this.edges[vertex] = {};
  }

  addEdge(vertex1, vertex2, weigth) {
    if (weigth === undefined) {
      weigth = 0;
    }
    this.edges[vertex1][vertex2] = weigth;
    this.edges[vertex2][vertex1] = weigth;
  }

  removeEdge(vertex1, vertex2) {
    if (this.edges[vertex1] && this.edges[vertex1][vertex2] !== undefined) {
      delete this.edges[vertex1][vertex2];
    }

    if (this.edges[vertex2] && this.edges[vertex2][vertex1] !== undefined) {
      delete this.edges[vertex2][vertex1];
    }
  }

  removeVertex(vertex) {
    for (const key in this.edges[vertex]) {
      this.removeEdge(key, vertex);
    }
    delete this.edges[vertex];
  }
}

const graph = new UndirectedGraph();
graph.addVertex(1);
graph.addVertex(2);
graph.addEdge(1, 2, 1);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addEdge(2, 3, 8);
graph.addEdge(3, 4, 10);
graph.addEdge(4, 5, 100);
graph.addEdge(1, 5, 88);
graph.removeVertex(5);

class DirectedGraph {
  constructor() {
    this.edges = {};
  }

  addVertex(vertex) {
    this.edges[vertex] = {};
  }

  addEdge(origVertex, destVertex, weigth) {
    if (weigth === undefined) {
      weigth = 0;
    }
    this.edges[origVertex][destVertex] = weigth;
  }

  removeEdge(origVertex, destVertex) {
    if (
      this.edges[origVertex] &&
      this.edges[origVertex][destVertex] != undefined
    ) {
      delete this.edges[origVertex][destVertex];
    }
  }

  removeVertex(vertex) {
    for (let adjacentVertex in this.edges[vertex]) {
      console.log(adjacentVertex);
      console.log(vertex);
      this.removeEdge(adjacentVertex, vertex);
    }
    delete this.edges[vertex];
  }

  bfs(startVertex) {
    const queue = [];
    const visited = {};
    queue.push(startVertex);

    while (queue.length) {
      let vertex = queue.shift();
      if (!visited[vertex]) {
        visited[vertex] = true;
        console.log(vertex);
        for (let adj in this.edges[vertex]) {
          queue.push(adj);
        }
      }
    }
  }
}

const digraph = new DirectedGraph();
digraph.addVertex("A");
digraph.addVertex("B");
digraph.addVertex("C");
digraph.addEdge("A", "B", 1);
digraph.addEdge("B", "C", 2);
digraph.addEdge("C", "A", 3);
digraph.bfs("A");
