const unsorted = [14,-4,17,6,22,1,-5]

// Insertion Sort 由小到大
// 假設第一個元素已經排序好，從第二個元素開始，往前面的已排序好的元素做比較，如果比較小就插入
// O(n^2)
function insertionSort(arr){
    for(let j=1; j<arr.length; j++){
        let currentValue = arr[j]
        let i = j-1

        while(i>=0 && arr[i]>currentValue){
            arr[i+1] = arr[i]
            i--
        }

        // 最後會多一個空格，這也就是要插入的位置
        arr[i+1] = currentValue
    }
    return arr
}

console.log(insertionSort(unsorted))