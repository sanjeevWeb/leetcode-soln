/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length

    let totalSum = (n * (n + 1 ))/2

    let arrSum = nums.reduce((acc,num) => acc + num, 0)

    return totalSum - arrSum
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna