const testArray = ["A", "B", "C"];

// O(n^3)
function perm(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
                continue;
            }

            for (let k = 0; k < arr.length; k++) {
                if (i === k || j === k) {
                    continue;
                }
                console.log(arr[i], arr[j], arr[k]);
            }
        }
    }
}

perm(testArray);