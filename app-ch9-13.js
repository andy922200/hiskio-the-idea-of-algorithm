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
}

const bst = new BinarySearchTree();
bst.treeInsert(new Node(15));
bst.treeInsert(new Node(6));
bst.treeInsert(new Node(5));
bst.treeInsert(new Node(1));
bst.treeInsert(new Node(13));
bst.treeInsert(new Node(-7));
bst.treeInsert(new Node(3));

console.log(bst);