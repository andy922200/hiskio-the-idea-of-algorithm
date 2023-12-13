const resource = [-11, 0, 1, 2, 3, 9, 14, 17, 21]
const avgNum = 1.5

// Method 1 => O(n^2)
function averagePairONSquare(arr, avg){
    const result = []

    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            if((arr[i] + arr [j])/2 === avg){
                result.push([arr[i], arr[j]])
            }
        }
    }

    return result
}

// Method 2 => O(n)
function averagePairPointer(arr, avg){
    const result = []
    let left = 0
    let right = arr.length - 1

    while(left<right){
        let midAvg = (arr[left] + arr[right]) / 2

        if(midAvg < avg){
            left++
        }else if(midAvg > avg){
            right--
        }else{
            result.push([arr[left], arr[right]])
            left++
            right--
        }
    }

    return result
}

console.log('averagePairONSquare', averagePairONSquare(resource, avgNum))
console.log('averagePairPointer', averagePairPointer(resource, avgNum))