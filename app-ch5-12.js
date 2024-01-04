const unsortedArr = [14,-4,17,6,22,1,-5]

// 選擇排序法，以由小到大排序
// O(n^2)
// 1. 從第一個元素開始，找出最小的元素。最後一個元素會是最大的，所以只要取到倒數第二個元素
// 2. 將最小的元素 Index 給保留下來，因為你得跑完整個陣列才能確定最小元素 Index
// 3. 將最小的元素和第 i 項元素交換位置

function selectionSort(arr){
    for(let i=0; i<=arr.length-2;i++){
        let minIndex = i
        for(let j=i; j<=arr.length-1;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }
        [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
    }

    return arr
}

console.log('selectionSort Result:',selectionSort(unsortedArr))