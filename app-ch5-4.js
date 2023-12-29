const source = [2, 3, 5, 4, 1]

// Bubble Sort 由小到大 -> 從最右邊開始向左邊兩兩互比
// O(n^2)
function bubbleSort(arr){
    let step = 0
    let compareCount = 0

    for (let i = 0; i <= arr.length - 2; i++) {
        for (let j = arr.length - 1; j >= i + 1; j--) {
            compareCount++
            // left > right
            if(arr[j-1] > arr[j]){
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
                step++
            }
        }
    }

    console.log('final', arr)
    console.log(`total op steps: swap ${step} times + compare ${compareCount} times = ${step+compareCount} times `)
}

bubbleSort([1,2,3,5,4])

// Bubble Sort 優化 -> 以由小到大為例
// 如果兩兩相比不需要交換，那就直接 break 這個區段
// O(n)

function betterBubbleSort(arr){
    let step = 0
    let compareCount = 0

    for(let i=0; i<=arr.length-2;i++){
        let swapping = false
        compareCount++

        for(let j=arr.length-1; j>=i+1;j--){
            if (arr[j - 1] > arr[j]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
                step++
                swapping = true
            }
        }

        if(swapping === false) break
    }

    console.log('final', arr)
    console.log(`total op steps: swap ${step} times + compare ${compareCount} times = ${step + compareCount} times `)
}

betterBubbleSort([1, 2, 3, 5, 4])