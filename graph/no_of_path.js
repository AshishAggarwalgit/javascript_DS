/** Solution 1
 * 1
 */

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

function no_of_path(m, s, d, path, currentPath) {
  currentPath.push(s);

  // console.log("s = ",s,currentPath)
  if (s === d) {
    // console.log(" path")
    path.push(currentPath);
    // console.log("path = ",path)
    console.log(currentPath);
    currentPath = [];
    return;
  }

  let adj = m.get(s);

  if (adj) {
    for (let a of adj) {
      // if(currentPath.indexOf(a) == -1 ){
      no_of_path(m, a, d, path, currentPath);
      // if(currentPath.length){
      //     currentPath.pop();
      // }
      currentPath.pop();
      // console.log("currentpath = ",path,currentPath)
      // }
    }
  } else {
  }
}
let m = new Map();

addEdge(m, 0, 1);
addEdge(m, 0, 6);
addEdge(m, 1, 2);
addEdge(m, 1, 6);
addEdge(m, 1, 5);
addEdge(m, 2, 3);
addEdge(m, 3, 4);
addEdge(m, 5, 2);
addEdge(m, 5, 3);
addEdge(m, 5, 4);
addEdge(m, 6, 5);
addEdge(m, 7, 1);
addEdge(m, 7, 6);

let paths = [];
let currentPath = [];
no_of_path(m, 0, 6, paths, currentPath);

//  console.log(paths);
