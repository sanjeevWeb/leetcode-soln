/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    for (let i=0;i<ransomNote.length;i++) {
        if (!magazine.includes(ransomNote[i])) {
            return false
        }
        magazine = magazine.replace(ransomNote[i], "")
    }
    return true
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna