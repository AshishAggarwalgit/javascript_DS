function Graph() {
  this.adjList = {};
}

Graph.prototype.addVertex = function (vertex) {
  this.adjList[vertex] = [];
};

Graph.prototype.addEdge = function (vertex1, vertex2) {
  this.adjList[vertex1].push(vertex2);
};

Graph.prototype.dfs = function () {
  const nodes = Object.keys(this.adjList);
  const visited = {};

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    this.dfsUtil(node, visited);
  }
};

Graph.prototype.dfsUtil = function (vertex, visited) {
  if (!visited[vertex]) {
    visited[vertex] = true;
    console.log("vertex= ", vertex);
    const neighbours = this.adjList[vertex];
    // console.log("neighbours = ", neighbours);
    for (let i = 0; i < neighbours.length; i++) {
      const neighbour = neighbours[i];
      //   console.log("neighbour = ", neighbour);
      this.dfsUtil(neighbour, visited);
    }
  }
};

Graph.prototype.detectCyle = function () {
  const nodes = Object.keys(this.adjList);
  const visited = {};
  const recStack = {};
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (this.detectCyleUtil(node, visited, recStack)) {
      console.log("Graph has cycle.");
    } else {
      console.log("Graph has no cycle.");
    }
  }
};

Graph.prototype.detectCyleUtil = function (vertex, visited, recStack) {
  console.log("before if = ", vertex, visited);
  if (!visited[vertex]) {
    visited[vertex] = true;
    recStack[vertex] = true;

    let adj = this.adjList[vertex];

    for (let i = 0; i < adj.length; i++) {
      // console.log('parent = ',vertex,'child = ',adj[i],'recStack = ',recStack);
      if (!visited[adj[i]] && this.detectCyleUtil(adj[i], visited, recStack)) {
        return true;
      } else if (recStack[vertex]) {
        return true;
      }
    }
  }
  recStack[vertex] = false;
  return false;
};

Graph.prototype.topologicalSortingUtil = function (
  node,
  visited,
  time,
  departure
) {
  let adj = this.adjList[node];
  visited[node] = true;

  for (let i = 0; i < adj.length; i++) {
    if (!visited[adj[i]]) {
      this.topologicalSortingUtil(adj[i], visited, time, departure);
    }
  }
  departure[node] = ++time.time;
};

Graph.prototype.topologicalSorting = function () {
  const nodes = Object.keys(this.adjList);
  let visited = {};
  let time = { time: 0 };
  let departure = {};
  for (let i = 0; i < nodes.length; i++) {
    if (!visited[nodes[i]]) {
      let node = nodes[i];
      this.topologicalSortingUtil(node, visited, time, departure);
    }
  }

  // console.log(departure)

  let nodes2 = Object.keys(departure);

  for (let i = 0; i < nodes2.length - 1; i++) {
    let max = departure[nodes2[i]];
    for (let j = i; j < nodes2.length; j++) {
      if (max < departure[nodes2[j]]) {
        let temp = nodes2[i];
        nodes2[i] = nodes2[j];
        nodes2[j] = temp;
      }
    }
  }

  console.log(nodes2);
};

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("D", "E");
graph.addEdge("C", "E");
graph.addEdge("A", "D");
graph.addEdge("A", "C");
graph.addEdge("E", "B");
graph.addEdge("D", "B");

// console.log(graph.adjList)

// graph.dfs();
// graph.detectCyle();
graph.topologicalSorting();
