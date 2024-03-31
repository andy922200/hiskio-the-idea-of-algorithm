class Node{
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

// 廣度優先遍歷
function breadthFirstTraversal(root) {
    if (!root) return; // 如果根節點不存在，直接返回

    const queue = []; // 使用陣列模擬隊列
    queue.push(root); // 將根節點加入隊列

    while (queue.length > 0) { // 當隊列不為空時進行遍歷
        const currentNode = queue.shift(); // 從隊列中取出當前節點
        console.log(currentNode.value); // 印出當前節點的值

        // 將當前節點的所有子節點加入隊列
        for (let i = 0; i < currentNode.children.length; i++) {
            queue.push(currentNode.children[i]);
        }
    }
}

// 深度優先遍歷 PreOrder
function DepthFirstPreOrder(node) {
    if (!node) return; // 若節點不存在，直接返回

    console.log(node.value); // 首先訪問當前節點

    // 遞歸地對每個子節點進行前序遍歷
    for (let i = 0; i < node.children.length; i++) {
        DepthFirstPreOrder(node.children[i]);
    }
}

function DepthFirstInOrder(node) {
    if (node == null) return; // 如果節點不存在，則返回

    // 如果存在子節點，首先遞歸遍歷第一個子節點
    if (node.children.length > 0) {
        DepthFirstInOrder(node.children[0]);
    }

    console.log(node.value); // 訪問當前節點

    // 遞歸遍歷其餘的子節點
    for (let i = 1; i < node.children.length; i++) {
        DepthFirstInOrder(node.children[i]);
    }
}

function DepthFirstPostOrder(node) {
    if (node == null) return; // 如果節點不存在，則返回

    // 遞歸地對每個子節點進行後序遍歷
    for (let i = 0; i < node.children.length; i++) {
        DepthFirstPostOrder(node.children[i]);
    }

    // 訪問當前節點
    console.log(node.value);
}

// Demo
//    1
//   / \
//  2    3
// / |   |\
// 4 5   6 7
const root = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);

// 建立節點之間的關係
root.children.push(node2, node3);
node2.children.push(node4, node5);
node3.children.push(node6, node7);

// 執行廣度優先遍歷
console.log('廣度優先遍歷');
console.log('1-2-3-4-5-6-7');
breadthFirstTraversal(root);
console.log('----------------------------------')
// 執行廣度優先遍歷 PreOrder
console.log('深度優先遍歷 PreOrder');
console.log('1-2-4-5-3-6-7');
DepthFirstPreOrder(root);
console.log('----------------------------------')
// 執行廣度優先遍歷 InOrder
console.log('深度優先遍歷 InOrder');
console.log('4-2-5-1-6-3-7');
DepthFirstInOrder(root);
console.log('----------------------------------')
// 執行廣度優先遍歷 PostOrder
console.log('深度優先遍歷 PostOrder');
console.log('4-5-2-6-7-3-1');
DepthFirstPostOrder(root);