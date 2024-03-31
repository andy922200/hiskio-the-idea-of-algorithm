class Node{
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

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
breadthFirstTraversal(root);