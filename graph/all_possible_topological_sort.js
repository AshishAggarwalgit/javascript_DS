function Graph() {
  this.adjList = {};
  this.indegree = {};
}

Graph.prototype.addVertex = function (vertex) {
  this.adjList[vertex] = [];
};

Graph.prototype.addEdge = function (vertex1, vertex2) {
  this.adjList[vertex1].push(vertex2);
};

Graph.prototype.setIndegree = function () {

   let nodes =  Object.keys(this.adjList);

    for(let i = 0;i<nodes.length;i++){

        let adj  = this.adjList[nodes[i]];

        //initialize the indegree by 0 of vertex.
        if(!this.indegree[nodes[i]]){
            this.indegree[nodes[i]]=0;
        }

        // increment the indegree by 1 of every adjacent vertex.
        for(let i = 0;i<adj.length;i++){
            // console.log(adj[i],this.indegree[adj[i]]);
            if(!this.indegree[adj[i]]){
                this.indegree[adj[i]] = 1;
            }else{
                this.indegree[adj[i]]+=1;
            }
            
        }
    }

}

Graph.prototype.findAllTopologicalOrder = function (discovered,path) {

    let nodes = Object.keys(this.adjList);

    for(let i = 0;i<nodes.length;i++){
        
        if(this.indegree[nodes[i]] == 0 && !discovered[nodes[i]]){
            let adj = this.adjList[nodes[i]];
            adj.forEach(a=>{
                this.indegree[a]--;
            })
            path.push(nodes[i]);
            discovered[nodes[i]] = true;

            this.findAllTopologicalOrder(discovered,path);

            // console.log("current node  = ",nodes[i],adj);

            adj.forEach(a=>{
                this.indegree[a]++;
            })

            path.pop();
            discovered[nodes[i]] = false;


        }

    }

    if(path.length === nodes.length){
        console.log(path);
    }

}


const graph = new Graph();

// graph.addVertex(0);
// graph.addVertex(1);
// graph.addVertex(2);
// graph.addVertex(3);
// graph.addVertex(4);
// graph.addVertex(5);
// graph.addVertex(6);
// graph.addVertex(7);


// graph.addEdge(0,6);
// graph.addEdge(1, 2);
// graph.addEdge(1, 6);
// graph.addEdge(1, 4);
// graph.addEdge(3, 0);
// graph.addEdge(3, 4);
// graph.addEdge(5, 1);
// graph.addEdge(7, 1);
// graph.addEdge(7, 0);
// graph.setIndegree();
// console.log(graph)

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("D", "E");
graph.addEdge("C", "E");
graph.addEdge("A", "D");
graph.addEdge("A", "C");
graph.addEdge("E", "B");
graph.addEdge("D", "B");
graph.setIndegree();    

console.log(graph)
let discovered = {};
let path = []
graph.findAllTopologicalOrder(discovered,path);