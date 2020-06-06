/**
 * 1 perform bfs
 * 2 store departure time of every node during bfs.
 * 3 then do loop over every node to compare departure time of  adjacent node to their parent departure time.
 * 4 if departure[adj] > departure[parent] then return false. otherwise return true.  
 */

function addEdge(map, u, v) {
    if (map.get(u)) {
      map.get(u).push(v);
    } else {
      map.set(u, []);
      map.get(u).push(v);
    }
  }


  function dfs(graph,v,departure,discovered,time){

    // console.log("dfs = ",time)
    discovered.set(v,true);

    let adj = graph.get(v);

    if(adj){
        for(let a  of adj){
            if(!discovered.get(a)){
                dfs(graph,a,departure,discovered,time)
            }
        }
    }
    departure.set(v,time.time++);
    // console.log("departure time = ",v,departure);
    // console.log("departure time = ",v,time);

  }


  function checkDirected(graph,n){

    let departure = new Map();
    let discovered = new Map();

    let time = {time:0};

    for(let i = 0;i<n;i++){
        if(!discovered.get(i)){
            dfs(graph,i,departure,discovered,time);
        }
    }


    for(let i = 0;i<n;i++){
        let adj = graph.get(i);
        if(adj){
            for(let a of adj){
                // console.log("departure = ",i,a,departure.get(i),departure.get(a));
                if(departure.get(a) >= departure.get(i)){
                    return false;
                }
            }
        }
    }

    return true;
  }

  let m = new Map();
  addEdge(m,0,1);
  addEdge(m,0,3);
  addEdge(m,1,2);
  addEdge(m,1,3);
  addEdge(m,3,2);
  addEdge(m,3,4);
  addEdge(m,3,0);
  addEdge(m,5,6);
  addEdge(m,6,3);


  let n = 7;
console.log(checkDirected(m,n));


  