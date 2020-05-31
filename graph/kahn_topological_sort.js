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

function topological_sort(m,sortedVertex,indegree){

    console.log("indegree = ",indegree)
    let set = [];

    for(let i = 0;i<8;i++){
        if(!indegree.get(i)){
            set.push(i);
        }
    }
    console.log("set",set);

    while(set.length){
        let n = set.shift();
        sortedVertex.push(n);
        let adj = m.get(n)
        console.log(adj)
        if(adj){

            for(let a of adj){
    
                indegree.set(a,indegree.get(a)-1);
    
                if(!indegree.get(a)){
                    set.push(a);
                }
            }
        }
    }

    for(let i = 0;i<7;i++){
        if(indegree[i]){
            return false;
        }
    }

    return true;
}


let m = new Map();

addEdge(m,0,6);
addEdge(m,1,2);
addEdge(m,1,4);
addEdge(m,1,6);
addEdge(m,3,0);
addEdge(m,3,4);
addEdge(m,5,1);
addEdge(m,7,0);
addEdge(m,7,1);

let indegree = new Map();
let v = 8
for(let i = 0;i<v;i++){
    indegree.set(i,0);
}
// while() indegree.push(0);


for(let a of m.keys()){
    let adj = m.get(a);

    adj.forEach(aj=>{
        // console.log("aj = ",aj,indegree.get(aj))
        // if(indegree.get(aj)){
            // console.log("increment = ",indegree.get(aj)+1)
            indegree.set(aj,indegree.get(aj)+1); 
        // }else{
        //     indegree.set(aj,1);
        // }
    })
}
// console.log("indegree = ",indegree);

let sortedVertex = [];

if(topological_sort(m,sortedVertex,indegree)){
    console.log(sortedVertex);
}else{
    console.log("topological sort is not possible.")
}