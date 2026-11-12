/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0]
    let currSum = nums[0]

    for (let i=1;i<nums.length;i++) {
        currSum = Math.max(nums[i], currSum + nums[i])

        maxSum = Math.max(maxSum, currSum)
    }
    return maxSum
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna