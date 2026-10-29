/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    let rev = ""
    let isNegative = false
    if (num == 0) return "0"
    if (num < 0) {
        isNegative = true
    }
    num = Math.abs(num)

    while (num) {
        
        let rem = num % 7
        rev = rem.toString() + rev
        num = Math.floor(num / 7)
    }
    if (isNegative) {
        rev = "-" + rev
    }

    return rev
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna