


// Implementation of Graph data structure

class Graph {
    constructor(){
        this.adjList = new Map()
    }

    addVertex(vertex){
        if(!this.adjList.has(vertex)){
            this.adjList.set(vertex,[])
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjList.has(vertex1)){
            this.addVertex(vertex1)
        }

        if(!this.adjList.has(vertex2)){
            this.addVertex(vertex2)
        }

        this.adjList.get(vertex1).push(vertex2)
        this.adjList.get(vertex2).push(vertex1)
    }

    removeVertex(vertex){
        while(this.adjList.get(vertex).length > 0){
            const adjacentVertex = this.adjList.get(vertex).pop()
            this.removeEdge(vertex,adjacentVertex)
        }

        this.adjList.delete(vertex)
    }

    removeEdge(vertex,adjacentVertex){
        this.adjList.set(vertex,this.adjList.get(vertex).filter(item => item !== adjacentVertex))
        this.adjList.set(adjacentVertex,this.adjList.get(adjacentVertex).filter(item => item !== vertex))
    }

    print(){
        for (const [vertex,neighbours] of this.adjList) {
             console.log(`${vertex} => ${neighbours.join(',')}`);
        }
    }

    bfs(startingVertex){
        const queue = []
        const result = []
        const visited = new Map()
        
        queue.push(startingVertex)
        visited.set(startingVertex,true)

        while(queue.length > 0){
            const currentVertex = queue.shift()
            result.push(currentVertex)

            const neighbours = this.adjList.get(currentVertex)
            for(const neighbour of neighbours){
                if(!visited.has(neighbour)){
                    visited.set(neighbour,true)
                    queue.push(neighbour)
                }
            }
        }

        return result

    }

    dfs(startingVertex){
        let stack = []
     
       let result = []
        let visited = new Map()

        stack.push(startingVertex)
        visited.set(startingVertex,true)

        while(stack.length > 0){
            const currentVertex = stack.pop()
            result.push(currentVertex)

            const neighbours = this.adjList.get(currentVertex)
            for (const neighbour of neighbours) {
                 if(!visited.has(neighbour)){
                    stack.push(neighbour)
                    visited.set(neighbour,true)
                 }
            }
        }
        return result;
    }
}

let graph = new Graph()
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addEdge(1, 2);
graph.addEdge(2,3)
graph.addEdge(1,3)
graph.addEdge(2,4);
graph.removeEdge(2,3)
graph.print()
console.log(graph.bfs(1));
console.log(graph.dfs(1));


