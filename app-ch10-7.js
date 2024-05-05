class Node {
    constructor(value){
        this.value = value;
        this.neighbors = [];
        this.visited = false;        
    }

    addNeighbor(node){
        this.neighbors.push(node);
    }
}

const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
const E = new Node('E');
const F = new Node('F');
const G = new Node('G');
const H = new Node('H');
const I = new Node('I');
const J = new Node('J');
const K = new Node('K');
const L = new Node('L');
const M = new Node('M');

A.addNeighbor(E);
A.addNeighbor(F);
B.addNeighbor(D);
C.addNeighbor(D);
D.addNeighbor(B);
D.addNeighbor(C);
D.addNeighbor(E);
D.addNeighbor(I);
E.addNeighbor(A);
E.addNeighbor(D);
E.addNeighbor(F);
E.addNeighbor(I);
F.addNeighbor(A);
F.addNeighbor(E);
F.addNeighbor(I);
G.addNeighbor(H);
G.addNeighbor(I);
H.addNeighbor(G);
H.addNeighbor(I);
H.addNeighbor(L);
I.addNeighbor(D);
I.addNeighbor(E);
I.addNeighbor(F);
I.addNeighbor(G);
I.addNeighbor(H);
I.addNeighbor(J);
I.addNeighbor(K);
I.addNeighbor(M);
J.addNeighbor(I);
J.addNeighbor(M);
K.addNeighbor(I);
K.addNeighbor(L);
K.addNeighbor(M);
L.addNeighbor(H);
L.addNeighbor(K);
M.addNeighbor(I);
M.addNeighbor(J);
M.addNeighbor(K);

function BFT(starter, result = []){
    const queue = []
    queue.push(starter);
    starter.visited = true;

    while(queue.length !== 0){
        let firstNode = queue.shift();
        result.push(firstNode.value);
        firstNode.neighbors.forEach(neighbor => {
            if(!neighbor.visited){
                neighbor.visited = true;
                queue.push(neighbor);
            }
        });
    }

    return result
}

console.log('BFT start from F Node: ', BFT(F))