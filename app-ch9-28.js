class Node {
    constructor (value){
        this.value = value;
        this.visited = false;
        this.edges = [];
    }

    addNeighbor(edge){
        this.edges.push(edge)
    }
}

class Edge {
    constructor(node1, node2, weight) {
        this.node1 = node1;
        this.node2 = node2;
        this.weight = weight;
    }
}

const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
const E = new Node('E');
const F = new Node('F');
const allNodes = [A, B, C, D, E, F];

const e1 = new Edge(A, B, 10);
const e2 = new Edge(A, C, 8);
const e3 = new Edge(B, D, 6);
const e4 = new Edge(C, D, 5);
const e5 = new Edge(B, E, 7);
const e6 = new Edge(D, E, 4);
const e7 = new Edge(D, F, 3);
const e8 = new Edge(E, F, 1);
const e9 = new Edge(C, F, 8);
A.addNeighbor(e1);
B.addNeighbor(e1);
A.addNeighbor(e2);
C.addNeighbor(e2);
B.addNeighbor(e3);
D.addNeighbor(e3);
C.addNeighbor(e4);
D.addNeighbor(e4);
B.addNeighbor(e5);
E.addNeighbor(e5);
D.addNeighbor(e6);
E.addNeighbor(e6);
D.addNeighbor(e7);
F.addNeighbor(e7);
E.addNeighbor(e8);
F.addNeighbor(e8);
C.addNeighbor(e9);
F.addNeighbor(e9);

let bucket = []
console.log(mstPrim(A));

function mstPrim(startNode){
    let mstEdges = [];

    for (let i=0; i< startNode.edges.length; i++){
        bucket.push(startNode.edges[i]);
    }

    let bestEdge = getBestEdge();

    while (bestEdge !== null){
        const node1 = bestEdge.node1;
        const node2 = bestEdge.node2;
        node1.visited = true;
        node2.visited = true;
        mstEdges.push(bestEdge);

        bucket = [];

        allNodes.forEach(node => {
            if (node.visited){
                node.edges.forEach(edge => {
                    if (!mstEdges.includes(edge)){
                        bucket.push(edge);
                    }
                })
            }
        })

        bestEdge = getBestEdge();
    }

    return mstEdges
}

function getBestEdge(){
    let bestEdge = null;

    while ( bestEdge === null && bucket.length !== 0){
        bestEdge = bucket[0];
        let index = 0;

        bucket.forEach((edge, i) => {
            if (edge.weight < bestEdge.weight){
                bestEdge = edge;
                index = i;
            }
        })

        if (bestEdge.node1.visited && bestEdge.node2.visited){
            bucket.splice(index, 1);
            bestEdge = null;
        }
    }

    return bestEdge
}
