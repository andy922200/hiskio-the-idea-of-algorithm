function uniqueLetterStringLength(str){
    let start = 0
    let end = 0
    let maxStrLength = -Infinity
    const counter = {}

    while(end<str.length){
        if(counter[str[end]]){
            counter[str[start]]--
            start++
        }else{
            counter[str[end]] = 1
            end++

            if(end-start > maxStrLength){
                maxStrLength = end-start
            }
        }
    }

    if(maxStrLength === -Infinity){
        console.log('Cannot find unique letters substring.')
        return null
    }

    return maxStrLength
}

console.log('uniqueLetterString', uniqueLetterStringLength(''))