/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let clone = word

    if (clone.toUpperCase() == word) return true

    if ( clone.slice(1).toLowerCase() == word.slice(1)) return true

    // if (clone.toLowerCase() == word) return true 

    return clone.toLowerCase() == word
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna