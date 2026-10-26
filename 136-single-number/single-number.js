/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    nums.sort((a,b) => a - b)

    let result = 0

    for ( let i=0;i<nums.length;i++ ){
        result ^= nums[i]
    }

    return result
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna