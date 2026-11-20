/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    if (s.trim().length == 0) return 0
    // let arr = s.trim().split(' ')

    // return arr.length

    let count = 0


    for (let i=0;i<s.length;i++) {
        if (s[i] != ' ' && ( i == 0 || s[i-1] == ' ')) {
            count += 1
        }

        // while (ch != ' ') {}
    }
    return count
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna