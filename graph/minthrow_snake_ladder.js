function addEdge(map, u, v) {
  if (map.get(u)) {
    map.get(u).push(v);
  } else {
    map.set(u, []);
    map.get(u).push(v);
  }

  //   if (map.get(v)) {
  //     map.get(v).push(u);
  //   } else {
  //     map.set(v, []);
  //     map.get(v).push(u);
  //   }
}

function bfs(m,src) {
  
    let queue = [];

    let discovered = [];

    discovered[src] = true;

    queue.push({v:src,minDist:0})

console.log(queue);

    while(queue.length){

      let node = queue.pop();

      console.log(node.v,m.get(node.v));
      if(node.v == 99){
        console.log("min dist = ",node.minDist);break;
      }

      let adj = m.get(node.v);

      if(adj){
        for(let a of adj){
  
          if(!discovered[a]){
  
            discovered[a] = true;
  
            let n = {v:a,minDist:node.minDist+1};
            queue.push(n);
          }
        }
      }

    }

}

let ladder = new Map(),
  snake = new Map(),
  m = new Map();

ladder.set(1, 38);
ladder.set(4, 14);
ladder.set(9, 31);
ladder.set(21, 42);
ladder.set(28, 84);
ladder.set(51, 67);
ladder.set(72, 91);
ladder.set(80, 99);

snake.set(17, 7);
snake.set(54, 34);
snake.set(62, 19);
snake.set(64, 60);
snake.set(87, 36);
snake.set(93, 73);
snake.set(95, 75);
snake.set(98, 79);

let n = 100;
for (let i = 0; i < n; i++) {
  for (let j = 1; j <= 6 && i + j <= n; j++) {
    let src = i;
    let dest = ladder.get(i + j)
      ? ladder.get(i + j)
      : snake.get(i + j)
      ? snake.get(i + j)
      : i + j;

    addEdge(m, src, dest);
  }
}

// console.log(m);
bfs(m,0);

// console.log(ladder,snake)
