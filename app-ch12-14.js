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
// [0,1,0,1,2]
console.log(construct_lps("AABAA"))
// [0,1,0,1,2,0,1,2,3,4,5,3]
console.log(construct_lps("AADAACAADAAD"))