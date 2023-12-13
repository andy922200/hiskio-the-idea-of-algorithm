function sameFrequency(str1, str2){
    if(str1.length !== str2.length) return false

    const counter1 = {}
    const counter2 = {}

    str1.split('').forEach(str=> counter1[str] ? counter1[str] += 1 : counter1[str] = 1)
    str2.split('').forEach(str => counter2[str] ? counter2[str] += 1 : counter2[str] = 1)

    for(let [left, _] of Object.entries(counter1)){
        if(!counter2[left] || (counter1[left] !== counter2[left])) return false
    }

    return true
}

console.log('result1', sameFrequency("abbc","aabc"))
console.log('result2', sameFrequency("abba", "abab"))
console.log('result3', sameFrequency("aasdebasdf", "adfeebed"))