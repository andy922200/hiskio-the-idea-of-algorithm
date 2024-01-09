// 合併排序法 Merge Sort
// 假設由小到大排序
// Big O: O(n log n)

function merge(arr1, arr2) {
    let result = []
    let i = 0
    let j = 0

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }

    // 有可能 arr1 或 arr2 有剩下的元素，所以要再做一次判斷
    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }

    while (j < arr1.length) {
        result.push(arr2[j])
        j++
    }

    return result
}

function mergeSort(arr){
    if(arr.length <= 1) return arr

    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid, arr.length)

    return merge(mergeSort(left),mergeSort(right))
}

console.log('mergeSort Result:',mergeSort([15,3,17,18,35,11,0,36]))