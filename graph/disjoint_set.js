class Disjoint {
  constructor() {
    this.parent = new Map();
  }

  makeSet(universe) {
    for (let a of universe) {
      this.parent.set(a, a);
    }
  }

  find(k) {
    // console.log("k =",k )

    if (this.parent.get(k) === k) return k;

    return this.find(this.parent.get(k));
    // return this.parent.get(k);
  }

  union(a, b) {
    let x = this.find(a);
    let y = this.find(b);

    console.log("x and y =", x, y, typeof x, typeof y);

    this.parent.set(x, y);
  }
}

function printSet(arr, ds) {
  for (let a of arr) {
    console.log(ds.find(a));
  }
}

let arr = [1, 2, 3, 4, 5];

let ds = new Disjoint();

ds.makeSet(arr);
printSet(arr, ds);

console.log("parent = ", ds.parent);

// console.log("After union 4 & 3");
// ds.union(4,3);
// printSet(arr,ds);

// console.log("parent = ",ds.parent)

// console.log("After union 2 & 1");
ds.union(2, 1);
printSet(arr, ds);

console.log("parent = ", ds.parent);

// console.log("After union 1 & 3");
ds.union(1, 3);
printSet(arr, ds);

console.log("parent = ", ds.parent);
