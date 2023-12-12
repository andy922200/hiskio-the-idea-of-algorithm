const arrayA = [1,2,3]
const arrayB = [5,16,1,3]

// Method A -> O(n^2)
function complicatedGetIntersection (arrA, arrB) {
    const result = []

    for(let i=0; i< arrA.length; i++){
        for(let j=0; j<arrB.length; j++){
            if(arrA[i] === arrB[j]){
                result.push(arrA[i])
            }
        }
    }

    return result
}

// Method B ( Counter ) -> O(n) 
// Via the method, you need to have a counter object.
function getIntersection( arrA, arrB) {
    const counter = {}
    const result = [];

    [...arrA, ...arrB].forEach(ele => {
        counter[ele] ? counter[ele] += 1 : counter[ele] = 1
    })

    for(let [left, right] of Object.entries(counter)){
        if(right > 1){
            result.push(Number(left))
        }
    }
    
    return result
}

console.log('Via Method A: ', complicatedGetIntersection(arrayA, arrayB))
console.log('Via Method B: ', getIntersection(arrayA, arrayB))
