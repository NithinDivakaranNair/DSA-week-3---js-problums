class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }



    RemoveEdge(v1, v2) {   
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(item => item !== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(item => item !== v1)
    }


    RemoveVertex(v1) {
        while (this.adjacencyList[v1].length) {
            const adjacencyvertex = this.adjacencyList[v1].pop()
            this.RemoveEdge(v1, adjacencyvertex)
        }
        delete this.adjacencyList[v1]
    }

    //this will left to rigth directionaly moveing
    DFSrecursionfunction(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        (function DFS(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return DFS(neighbor)
                }
            })

        })(start);

        return result
    }


    //this will rigth to left directionaly moveing
    DepthFirstIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {}
        let currentvertex;
        visited[start] = true

        while (stack.length) {
            currentvertex = stack.pop();
            result.push(currentvertex);
            this.adjacencyList[currentvertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor)
                }
            })
        }
        return result
    }

    BreadthFirst(start) {
        const queue = [start]
        const result = [];
        const visited = {};
        let currentvertex;
        visited[start] = true;
        while (queue.length) {
            currentvertex = queue.shift();
            result.push(currentvertex)
            this.adjacencyList[currentvertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor)
                }
            })
        }
        return result
    }






    printGraph() {
        for (const ver in this.adjacencyList) {
            const neighbors = this.adjacencyList[ver].join(', ');
            console.log(`${ver} -> ${neighbors}`);
        }
    }
}

let myGraph = new Graph();

myGraph.addVertex('A');
myGraph.addVertex('B');
myGraph.addVertex('C');
myGraph.addVertex('D');
myGraph.addEdge('A', 'B');
myGraph.addEdge('A', 'C');
myGraph.addEdge('D', 'A');
myGraph.addEdge('D', 'B');
// myGraph.printGraph();
// myGraph.RemoveVertex('D');
myGraph.printGraph();

// console.log(myGraph.DFSrecursionfunction("A"));
console.log(myGraph.DepthFirstIterative('A'));   
console.log(myGraph.BreadthFirst('A'));   