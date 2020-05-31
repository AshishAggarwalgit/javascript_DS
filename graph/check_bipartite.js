function addEdge(map, u, v) {
  if (map.get(u)) {
    map.get(u).push(v);
  } else {
    map.set(u, []);
    map.get(u).push(v);
  }

  if (map.get(v)) {
    map.get(v).push(u);
  } else {
    map.set(v, []);
    map.get(v).push(u);
  }
}


function dfs(m,v,discovered,color){


    let adj = m.get(v);

    for(let a of adj){
        if(!discovered[a]){

            discovered[a] = true;
            color[a] = !color[v];
            if(!dfs(m,a,discovered,color)){
                return false;
            }
        }
        if(color[v] === color[a]){
            return false;
        }
    }
    return true;
}
let m = new Map();

addEdge(m,1,2);
addEdge(m,2,3);
addEdge(m,2,8);
addEdge(m,3,4);
addEdge(m,4,6);
addEdge(m,5,7);
addEdge(m,5,9);
addEdge(m,8,9);
addEdge(m,2,4);


let discovered = new Array(10);
let color =  new Array(10);

discovered[1] = true;
color[1] = 0;

if(dfs(m,2,discovered,color)){
    console.log("Bipartite");
}else{
    console.log("Not bipartite");
}
