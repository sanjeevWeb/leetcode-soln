/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const result = [];
    let start = 0;

    for (let i = 0; i < nums.length; i++) {
        // Check if we are at the end of the array OR if the next number is not consecutive
        if (i === nums.length - 1 || nums[i] + 1 !== nums[i + 1]) {
            if (start === i) {
                // Single number range
                result.push(`${nums[start]}`);
            } else {
                // Multi-number range
                result.push(`${nums[start]}->${nums[i]}`);
            }
            // Move start pointer to the beginning of the next range
            start = i + 1;
        }
    }

    return result;

};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna