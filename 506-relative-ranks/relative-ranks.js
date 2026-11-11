/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let temp = [...score]
    temp.sort((a,b) => b - a)
    let result = []

    for (let i=0;i<score.length;i++) {
        let idx = temp.indexOf(score[i])

        if (idx == 0){
            result.push("Gold Medal")
        }else if(idx == 1){
            result.push("Silver Medal")

        }else if(idx == 2){
            result.push("Bronze Medal")

        }else{
            result.push((idx + 1).toString())
        }
    }
    return result
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna