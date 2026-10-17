/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    const transformedAlpha = []

    for (let i=0;i<words.length;i++) {
        let str = ""
        let n = words[i].length
        for (let j=0;j<n;j++) {
            let index = alphabet.indexOf(words[i][j])
            let charCode = morseCode[index]
            str += charCode
        }
        transformedAlpha.push(str)
    }

    let uniqueCode = new Set(transformedAlpha)

    return uniqueCode.size

};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna