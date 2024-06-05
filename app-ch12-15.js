function construct_lps(input) {
    const lps = []
    lps[0] = 0
    let j = 0; // lps proper prefix
    let i = 1; // lps proper suffix

    while (i < input.length) {
        if (input[i] === input[j]) {
            lps[i] = j + 1
            i++
            j++
        } else if (input[i] !== input[j]) {
            // 看 lps [j-1] 的值，並將 j 設為該值
            // 代表 lps[j-1] 的值是和 prefix 相同的
            if (j !== 0) {
                j = lps[j - 1]
            } else if (j === 0) {
                lps[i] = 0
                i++
            }
        }
    }

    return lps
}

function KMP(str1, str2){
    let i=0;
    let j=0;
    let counter = 0;
    let lps = construct_lps(str2);

    while(i<str1.length){
        if(str1[i] === str2[j]){
            i++
            j++

            if(j === str2.length){
                counter++
                j = lps[j-1]
            }
        }else if(str1[i] !== str2[j]){
            if(j !== 0){
                j = lps[j-1]
            }else if(j === 0){
                i++
            }
        }
    }

    console.log(counter)
}

KMP("ABCDABCDABCDABCD","ABCDABCD") // 3