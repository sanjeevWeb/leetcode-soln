/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const charCount = {};
    
    // Step 1: Build the frequency map
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Step 2: Find the first character with a frequency of 1
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            return i;
        }
    }
    
    // Return -1 if no unique character is found
    return -1;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna