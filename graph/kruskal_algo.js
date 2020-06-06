class Disjoint {
  constructor() {
    this.parent = new Map();
  }

  makeSet(universe) {
    for(let i = 0;i<n;i++){
        this.parent.set(i,i);
    }
  }

  find(k) {

    if (this.parent.get(k) === k) return k;

    return this.find(this.parent.get(k));
    // return this.parent.get(k);
  }

  union(a, b) {
    let x = this.find(a);
    let y = this.find(b);

    this.parent.set(x, y);
  }
}
function kruskalAlgo(graph, n) {
  let mst = [];

  let ds = new Disjoint();

  ds.makeSet(n);

  while(mst.length != n-1){

    let node = graph.shift();

    // console.log("node = ",node);

    let x = ds.find(node.s);
    let y = ds.find(node.d);

    if(x != y){
        mst.push(node);
        ds.union(x,y);
    }

  }

  return mst;
}

let graph = [
  {s: 0,d: 1,w: 7},
  {s: 1,d: 2,w: 8},
  {s: 0,d: 3,w: 5},
  {s: 1,d: 3,w: 9},
  {s: 1,d: 4,w: 7},
  {s: 2,d: 4,w: 5},
  {s: 3,d: 4,w: 15},
  {s: 3,d: 5,w: 6},
  {s: 4,d: 5,w: 8},
  {s: 4,d: 6,w: 9},
  {s: 5,d: 6,w: 11}
];

graph.sort((a, b) => {
  return a.w - b.w;
});

let n = 7;

let mst = kruskalAlgo(graph, n);
console.log(mst);