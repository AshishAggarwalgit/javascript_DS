function addEdge(map, u, v) {
  if (map.get(u)) {
    map.get(u).push(v);
  } else {
    map.set(u, []);
    map.get(u).push(v);
  }

  // if (map.get(v[0])) {
  //   map.get(v[0]).push([u, v[1]]);
  // } else {
  //   map.set(v[0], []);
  //   map.get(v[0]).push([u, v[1]]);
  // }
}

function DFS(m, v, discovered, arrival, isSc, time) {
  // console.log("arrival = ",v,arrival,time)
  if (!isSc) return false;

  arrival[v] = ++time;
  console.log("arrival 2 = ", arrival);

  discovered[v] = true;

  let arr = arrival[v];

  let adj = m.get(v);
  console.log("adj = ", adj);
  for (let n of adj) {
    if (!discovered[n]) {
      arr = Math.min(arr, DFS(m, n, discovered, arrival, isSc, time));
    } else {
      arr = Math.min(arr, arrival[n]);
    }
  }

  if (v != 0 && arr == arrival[v]) {
    isSc = false;
  }
  return arr;
}
let m = new Map();

addEdge(m, 0, 4);
addEdge(m, 1, 0);
addEdge(m, 1, 2);
addEdge(m, 2, 1);
addEdge(m, 2, 4);
addEdge(m, 3, 1);
addEdge(m, 3, 2);
addEdge(m, 4, 3);

let n = 5;
let discovered = [];
let time = -1;
let isSc = true;
let arrival = new Array(n);
let min = DFS(m, 0, discovered, arrival, isSc, time);

console.log(discovered, min);
