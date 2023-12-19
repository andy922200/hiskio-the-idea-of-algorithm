// 動態的 Sliding Window
// 找一個「最小長度的連續子陣列」，其總和的值會大於等於目標值

// 用 Pointer -> left 和 right 所指的範圍就是 subArray
// 當 right 指標超出 arr 長度時，就停止擴展
// 當產生的 subArray 有大於等於目標值時，將 left 縮小再檢查

function minSubLength(arr, sum){
    let left = 0
    let right = 0
    let minLength = Infinity
    let tempSum = 0

    while(right < arr.length){
        tempSum += arr[right]

        while(tempSum >= sum){
            if(right-left+1 < minLength){
                minLength = right-left+1
            }
            // 縮小陣列長度
            tempSum -= arr[left]
            left++
        }

        right++
    }

    return minLength === Infinity ? 0 : minLength
}



console.log(minSubLength([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 60));