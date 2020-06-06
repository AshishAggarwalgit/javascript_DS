/**
 * check cycle exist in undirected graph.
 */

function addEdge(map, u, v) {
    if (map.get(u)) {
      map.get(u).push(v);
    } else {
      map.set(u, []);
      map.get(u).push(v);
    }

    // if (map.get(u)) {
    //     map.get(u).push(v);
    //   } else {
    //     map.set(u, []);
    //     map.get(u).push(v);
    //   }

  }