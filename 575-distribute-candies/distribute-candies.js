/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let obj = {}
    let n = candyType.length

    for (let i=0;i<n;i++) {
        if (obj[candyType[i]]) {
            obj[candyType[i]] += 1
        }else{
            obj[candyType[i]] = 1
        }
    }

    let types = (Object.keys(obj)).length

    let maxCap = n / 2

    return types < maxCap ? types : maxCap
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna