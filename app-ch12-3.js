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

const testArray2 = ["A", "B", "C", "D"];
const result = [];

function perm2(arr, start) {
    if (start >= arr.length) {
        result.push([...arr])
    } else {
        for (let i = start; i < arr.length; i++) {
            swap(arr, start, i)
            perm2(arr, start + 1);
            swap(arr, start, i)
        }
    }
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
    return arr
}

perm2(testArray2, 0)
console.log('result: ',result)