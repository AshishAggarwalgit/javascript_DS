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


let arr = new Array(5);

arr.forEach((elem,index)=>{
  elem = new Array(5);
})


console.log(arr);