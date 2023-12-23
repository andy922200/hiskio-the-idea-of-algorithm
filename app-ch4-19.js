const arrs = [[[["a", [["b", ["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]]
const result = []

function collector(rawData){
    for (let i = 0; i < rawData.length; i++) {
        Array.isArray(rawData[i]) ? collector(rawData[i]) : result.push(rawData[i])
    }
}
collector(arrs)

console.log('after using collector:', result)