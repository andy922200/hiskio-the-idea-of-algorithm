class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.path = '';
        this.queue = [];
    }

    treeInsert(z) {
        let y = null;
        let x = this.root;

        while (x !== null) {
            y = x;
            x = z.key < x.key ? x.left : x.right;
        }

        if (y === null) {
            this.root = z;
        } else if (z.key < y.key) {
            y.left = z;
        } else {
            y.right = z;
        }
    }

    preOrder(n){
        if(n !== null){
            this.path += n.key + ' ';
            this.preOrder(n.left);
            this.preOrder(n.right);
        }
    }

    inOrder(n){
        if(n !== null){
            this.inOrder(n.left);
            this.path += n.key + ' ';
            this.inOrder(n.right);
        }
    }

    postOrder(n){
        if(n !== null){
            this.postOrder(n.left);
            this.postOrder(n.right);
            this.path += n.key + ' ';
        }
    }

    bftt(n){
        if(n !== null){
            this.queue.push(n);
            for(let i=0; i<this.queue.length; i++){
                const currentNode = this.queue[i];

                if(currentNode){
                    if(currentNode.left){
                        this.queue.push(currentNode.left);
                    }
                    if(currentNode.right){
                        this.queue.push(currentNode.right);
                    }
                }
            }
        }
    }

    searchRecursive(x, key) {
        if (x === null || key === x.key) return x;

        return key < x.key
            ? this.searchRecursive(x.left, key)
            : this.searchRecursive(x.right, key);
    }

    searchIteratively(x, key) {
        while (x !== null && key !== x.key) {
            x = key < x.key ? x.left : x.right;
        }

        if ( x === null){
            return 'Not found';
        }

        return x;
    }
}

const bst1 = new BinarySearchTree();
const bst2 = new BinarySearchTree();
const bst3 = new BinarySearchTree();
const bst4 = new BinarySearchTree();
const seeds = [15, 6, 5, 1, 13, -7, 3];

seeds.forEach(seed =>{
    bst1.treeInsert(new Node(seed));
    bst2.treeInsert(new Node(seed));
    bst3.treeInsert(new Node(seed));
    bst4.treeInsert(new Node(seed));
})

bst1.preOrder(bst1.root)
bst2.inOrder(bst2.root)
bst3.postOrder(bst3.root)
bst4.bftt(bst4.root)
console.log('PreOrder:', bst1.path)
console.log('InOrder:', bst2.path)
console.log('PostOrder:', bst3.path)
console.log('BFTT:', bst4.queue.map(node => node.key).join(' '))
console.log('Node 13:', bst1.searchIteratively(bst1.root, 13))
console.log('Node 6:', bst1.searchIteratively(bst1.root, 6))
console.log('Node -10:', bst1.searchIteratively(bst1.root, -10))