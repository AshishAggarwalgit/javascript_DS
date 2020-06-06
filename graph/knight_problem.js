let x = [2, 1, -2, -2, 1, 2, -1, -1];
let y = [1, 2, 1, -1, -2, -1, 2, -2];

function valid(x1, x2) {
  if (x1 < 0 || x1 >= 8 || x2 < 0 || x2 >= 8) {
    return false;
  } else {
    return true;
  }
}

function BFS(src, dest, count) {
  let queue = [];
  queue.push(src);
  // let count = 0;
  // let dest = 0;
  let visited = new Map();
  while (queue.length) {
    let cord = queue.shift();
    // let dist = cord.dist;

    console.log("cord = ", cord);
    if (cord.x === dest.x && cord.y === dest.y) {
      return cord.dist;
    }

    console.log("visited = ", visited.get(JSON.stringify(cord)));

    if (!visited.has(JSON.stringify(cord))) {
      visited.set(JSON.stringify(cord), true);

      count.count++;
      for (let i = 0; i < 8; i++) {
        let x1 = cord.x + x[i];
        let x2 = cord.y + y[i];

        if (valid(x1, x2)) {
          queue.push({ x: x1, y: x2, dist: cord.dist + 1 });
        }
      }
    }
  }

  return Number.MAX_VALUE;
}

let count = { count: 0 };
let src = { x: 7, y: 0, dist: 0 };
let dest = { x: 0, y: 7 };

let dist = BFS(src, dest, count);
console.log("count = ", count.count);
console.log(dist);
