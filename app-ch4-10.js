function isSubsequence(subStr, str){
    if(subStr.length === 0) return true

    let pointer1 = 0
    let pointer2 = 0

    while(pointer2 < str.length){
        if(str[pointer2] === subStr[pointer1]){
            pointer1++
        }

        if(pointer1 >= subStr.length){
            return true
        }

        pointer2++
    }

    return false
}

console.log('isSubsequence', isSubsequence('hello', 'hello Dear'))
console.log('isSubsequence', isSubsequence('book', 'brooklyn'))
console.log('isSubsequence', isSubsequence('abc', 'bac'))
console.log('isSubsequence', isSubsequence('abc', 'abc'))
console.log('isSubsequence', isSubsequence('', 'abc'))