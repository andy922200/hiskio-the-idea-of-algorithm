const data = [15, 3, 17, -17, 3.1415, 18, 20, 2, 1, 666]

// Step 1: Turn a complete binary tree into a max heap
function buildMaxHeap(arr, heapSize) {
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        maxHeapify(arr, i, heapSize);
    }
}

// Step 2: Compare the parent node with its children
// parent node: i; 
// left child: 2*i+1;
// right child: 2*i+2;
function maxHeapify(arr, i, heapSize) {
    let largestIndex = undefined;
    let left = i * 2 + 1;
    let right = i * 2 + 2;

    // Compare the parent node with its left child
    left <= heapSize && arr[left] > arr[i]
        ? largestIndex = left
        : largestIndex = i;

    // Compare the parent node with its right child
    // 因為 left 跟 i 比過了，所以直接跟 largestIndex 比
    if (right <= heapSize && arr[right] > arr[largestIndex]){
        largestIndex = right;
    }

    // If the largest number is not the parent node
    // which means the parent node is not the largest
    // therefore, swap the parent node with the largest number

    if (largestIndex !== i) {
        [arr[i], arr[largestIndex]] = [arr[largestIndex], arr[i]];
        // Recursively call maxHeapify to make sure the subtree is also a max heap
        maxHeapify(arr, largestIndex, heapSize);
    }
}

// Step 3. Heap sort
function heapSort(arr){
    let heapSize = arr.length - 1;
    buildMaxHeap(arr, heapSize);

    // The root node is always the largest number, so swap it with the last number
    // 因此，array 的最後一個位置就會是最大的數字
    for (let i = arr.length - 1; i >= 0; i--){
        [arr[0], arr[i]] = [arr[i], arr[0]];
        // The heap size is reduced by 1, which means the last number (node) is sorted
        heapSize --
        // 因為換至 root 的數字可能不符合 max heap 的規則，所以要重新檢查
        maxHeapify(arr, 0, heapSize);
    }

    return arr;
}

console.log('HeapSort Result:', heapSort(data))