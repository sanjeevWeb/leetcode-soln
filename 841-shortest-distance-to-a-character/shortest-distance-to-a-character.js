/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let occur = []
    let answer = []

    for (let i=0;i<s.length;i++) {
        if (s[i] == c) {
            occur.push(i)
        }
    }

    for (let i=0;i<s.length;i++) {
        let minIndex = Infinity
        for (let j=0;j<occur.length;j++) {
            let dis = Math.abs(occur[j] - i)
            minIndex = Math.min(minIndex,dis)
        }
        answer.push(minIndex)
    }

    return answer
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna