function addEdge(map, u, v) {
  if (map.get(u)) {
    map.get(u).push(v);
  } else {
    map.set(u, []);
    map.get(u).push(v);
  }

  if (map.get(v[0])) {
    map.get(v[0]).push([u, v[1]]);
  } else {
    map.set(v[0], []);
    map.get(v[0]).push([u, v[1]]);
  }
}

// let node = new Node(0,6,11);
function modifiedBFS(m, src, k) {
  let queue = [];
  let vertices = [];
  vertices.push(src);
  queue.push({ vertex: src, cost: 0, path: vertices });

  let max_cost = Number.MIN_VALUE;

  while (queue.length) {
    let node = queue.shift();
    // console.log("node = ", node);

    let vertex = node.vertex;
    let cost = node.cost;
    vertices = node.path;
    // console.log('cost and k = ',cost,k)
    if (cost > k) {
      max_cost = Math.max(max_cost, cost);
    }

    // console.log("m = ", m, vertex);clear

    // console.log("vertices = ",vertices)
    if (m.get(vertex)) {
      for (let adj of m.get(vertex)) {
        if (vertices.indexOf(adj[0]) == -1) {
          let v = Object.assign([], vertices);

          v.push(adj[0]);

          // console.log("adj nodes = ",adj);clear

          queue.push({ vertex: adj[0], cost: cost + adj[1], path: v });
        }
      }
    }
  }
  return max_cost;
}
let m = new Map();

addEdge(m, 0, [6, 11]);
addEdge(m, 0, [1, 5]);
addEdge(m, 1, [6, 3]);
addEdge(m, 1, [5, 5]);
addEdge(m, 1, [2, 7]);
addEdge(m, 2, [3, -8]);
addEdge(m, 3, [4, 10]);
addEdge(m, 5, [2, -1]);
addEdge(m, 5, [3, 9]);
addEdge(m, 5, [4, 1]);
addEdge(m, 6, [5, 2]);
addEdge(m, 7, [6, 9]);
addEdge(m, 7, [1, 6]);

let src = 0;
let cost = 50;
console.log(m);
let maxCost = modifiedBFS(m, src, cost);
console.log("maxCost = ", maxCost);
