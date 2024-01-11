const data = [15, 3, 17, -17, 3.14, 18, 20, 2, 1, 666]

function partition(arr, p, r){
    let pivot = arr[r] // 一開始 pivot 的值, index 為 r
    let i = p - 1 // 代表有 n 個數字比 pivot 小

    // for loop 跑 pivot 前面的數字
    for(let j=p; j<=r-1; j++){
        if(arr[j] <= pivot){
            i++
            [[arr[i]], arr[j]] = [[arr[j]], arr[i]]
        }   
    }

    // 最後把 pivot 的值放到中間
    // pivot 的新 index 就是 i+1
    [[arr[i+1]], arr[r]] = [[arr[r]], arr[i+1]]

    return i+1
}

function quickSort(arr, p = 0, r = arr.length - 1){
    if(p < r){
        const q = partition(arr, p, r)
        quickSort(arr, p, q-1)
        quickSort(arr, q+1, r)
    }

    return arr
}

console.log('Quick Sort Result:', quickSort(data))