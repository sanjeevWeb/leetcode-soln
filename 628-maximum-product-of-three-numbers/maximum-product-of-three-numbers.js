/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a,b) => a - b)
    let n = nums.length

    let largest1 = nums[n-1] * nums[n-2] * nums[n-3]
    let secLargest = nums[0] * nums[1] * nums[n-1]

    // let result = nums.reduce((acc,ele) => acc * ele, 1)

    return Math.max(largest1, secLargest)
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna