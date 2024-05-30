let perfect = 0
NQueens(8)
console.log("Number of perfect Solutions is: ", perfect)

function NQueens(n) {
    // Create a 2D array
    const arr = [];

    for (let i = 0; i < n; i++) {
        arr.push([]);
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            arr[i][j] = null
        }
    }

    let i = 0;
    let j = 0;
    let loop = true
    while (loop) {
        console.log("i: ", i, "j: ", j)

        arr[i][j] = "Q"

        // Check if Q position is valid
        let violation = false
        let k = 0;

        // Check column side (to top)
        while (k < i) {
            if (arr[k][j] === "Q") {
                violation = true
            }
            k++
        }

        // Check row side (to left)
        k = 0;
        while (k < j) {
            if (arr[i][k] === "Q") {
                violation = true
            }
            k++
        }

        // Check diagonal (to bottom-left)
        k = 1;
        let l = -1;
        while (i + k < n && j + l >= 0) {
            if (arr[i + k][j + l] === "Q") {
                violation = true
            }
            k++;
            l--;
        }

        // Check diagonal (to bottom-right)
        k = -1;
        while (i + k >= 0 && j + k >= 0) {
            if (arr[i + k][j + k] === "Q") {
                violation = true
            }
            k--;
        }

        if (!violation) {
            console.log("Valid position")
            console.log(arr)

            if (j === n - 1) {
                perfect++
                console.log("Perfect")

                // 清空當前位置，並往下移動
                arr[i][j] = null
                i++
            } else {
                i = 0;
                j++;
            }
        }

        if (violation) {
            console.log("Invalid position")
            console.log(arr)

            // 清空當前位置，並往下移動
            arr[i][j] = null
            i++
        }

        function check() {
            // go back to the previous column
            j--;

            for (let b = 0; b < arr.length; b++) {
                if (arr[b][j] === "Q") {
                    arr[b][j] = null
                    console.log("b and j is", b, j)
                    i = b + 1;
                    break;
                }
            }
        }

        while (i >= n) {
            check();
            if (j < 0) {
                console.log("dead end")
                loop = false
                break;
            }
        }
    }
}

