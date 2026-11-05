/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {

let sPointer = 0;
    let tPointer = 0;

    // Move through both strings until reaching the end of either
    while (sPointer < s.length && tPointer < t.length) {
        // If characters match, move the pointer for s
        if (s[sPointer] === t[tPointer]) {
            sPointer++;
        }
        // Always move the pointer for t
        tPointer++;
    }

    // If sPointer reached the length of s, all characters were found in order
    return sPointer === s.length;

};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna