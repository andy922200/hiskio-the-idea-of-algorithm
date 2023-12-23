// Time O(n^2)
function fibonacciSequence(n){
    if(n===0) return 0
    if(n===1) return 1

    return fibonacciSequence(n - 1) + fibonacciSequence(n-2)
}

for(let i=0; i<=15; i++){
    console.log(`fibonacciSequence - ${i} :`, fibonacciSequence(i))
}

// Time O(n)
function fib(n){
    const resultArr = Array.from({ length: n })

    resultArr[0] = 0
    resultArr[1] = 1

    if (n === 0) return resultArr[0]
    if (n === 1) return resultArr[1]

    for (let i = 2; i <= n; i++) {
        resultArr[i] = resultArr[i - 1] + resultArr[i - 2]
    }

    return resultArr[n]
};

for (let i = 0; i <= 15; i++) {
    console.log(`fib - ${i} :`, fib(i))
}