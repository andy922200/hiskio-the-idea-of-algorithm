let table1;
let table2;
let result = '';

const testStr = "ABCD"
const testStr2 = "ABC"
LCS(testStr, testStr2)
printLCS(testStr.length, testStr2.length)
console.log("Result: ", result)

function LCS(str1, str2) {
    let m = str1.length;
    let n = str2.length;
    table1 = []
    table2 = []

    // Table1
    for (let i = 0; i <= m; i++) {
        table1.push([])
        table1[i][0] = 0

        for (let k = 1; k <= n; k++) {
            table1[i].push(null)
        }
    }

    for( let j=0; j<=n; j++){
        table1[0][j] = 0
    }

    // Table2
    for(let i=0; i<=m; i++){
        table2.push([])

        for(let k=0; k<=n; k++){
            table2[i].push(null)
        }
    }

    for(let i=1; i<=m; i++){
        for(let j=1; j<=n; j++){
            if( str1[i - 1] === str2[j-1]){
                table1[i][j] = 1 + table1[i-1][j-1]
                table2[i][j] = "↖"
            }else if(table1[i-1][j] >= table1[i][j-1]){
                table1[i][j] = table1[i-1][j]
                table2[i][j] = "⬆"
            }else{
                table1[i][j] = table1[i][j-1]
                table2[i][j] = "⬅"
            }
        }
    }

    console.log("Table1: ", table1)
    console.log("Table2: ", table2)
}

function printLCS(i, j){
    if(i === 0 || j === 0){
        return;
    }
    
    if(table2[i][j] === "↖"){
        printLCS(i-1, j-1)
        result += testStr[i-1]
    }else if(table2[i][j] === "⬆"){
        printLCS(i-1, j)
    }else{
        printLCS(i, j-1)
    }
}