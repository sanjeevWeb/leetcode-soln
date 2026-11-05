/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    const ans = []
    arr.sort((a,b) => a - b)

    let minDiff = Infinity

    for (let i = 1; i < arr.length; i++) {
        // The new minDiff changes if the current diff is smaller
        minDiff = Math.min(minDiff, arr[i] - arr[i - 1]);
    }

    for (let i = 1; i < arr.length; i++) {
        // Push all pairs that equal the minDiff into ans
        if (arr[i] - arr[i - 1] === minDiff) ans.push([arr[i - 1], arr[i]]);
    }

    return ans
    
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna