// 靜態的 Sliding Window
const targetArray = [2, 7, 3, 0, 6, 1, -5, -12, -11]

// Method 1 -> O(n^2)
// 先生成每一個 Array，然後再分別加總各個 Array
function findMaxSum(arr, size){
    if(size > arr.length) return null

    let maxSum = -Infinity

    for(let i=0; i<=arr.length-size; i++){
        let tempSum = 0
        for(let j=i; j< i+size; j++){
            tempSum += arr[j]
        }

        if(tempSum > maxSum){
            maxSum = tempSum
        }
    }
    
    return maxSum
}

function findMinSum(arr, size){
    if (size > arr.length) return null

    let minSum = Infinity

    for(let i=0; i<=arr.length-size; i++){
        let tempSum = 0
        for (let j = i; j < i + size; j++) {
            tempSum += arr[j]
        }

        if (tempSum < minSum) {
            minSum = tempSum
        }
    }

    return minSum
}

// Method 2 -> O(n)
// 先生成第一個靜態 Sliding Window，後續執行「加入元素」並扣除「原先的第一個元素」
function findMaxSumBetter(arr, size){
    if (size > arr.length) return null

    let maxSum = 0

    for(let i=0; i<size; i++){
        maxSum += arr[i]
    }

    let tempValue = maxSum
    for(let j=size; j<arr.length; j++){
        tempValue = tempValue + arr[j] - arr[j-size]

        if (tempValue > maxSum) {
            maxSum = tempValue
        }
    }

    return maxSum
}

function findMinSumBetter(arr, size){
    if (size > arr.length) return null

    let minSum = 0

    for(let i=0; i<size;i++){
        minSum += arr[i]
    }

    let tempValue = minSum

    for(let j=size; j<arr.length; j++){
        tempValue = tempValue + arr[j] - arr[j-size]

        if(tempValue < minSum){
            minSum = tempValue
        }
    }

    return minSum
}


console.log('findMaxSum - Method 1', findMaxSum(targetArray, 3))
console.log('findMaxSum - Method 2', findMaxSumBetter(targetArray, 3))
console.log('findMinSum - Method 1', findMinSum(targetArray, 3))
console.log('findMinSum - Method 2', findMinSumBetter(targetArray, 3))
