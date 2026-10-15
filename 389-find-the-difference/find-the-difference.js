/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const obj = {}

    for (let i=0;i<s.length;i++) {
        if(obj[s[i]]){
            obj[s[i]] += 1
        }else{
            obj[s[i]] = 1
        }
    }
    for (let i=0;i<t.length;i++) {
        if(obj[t[i]]){
            obj[t[i]] -= 1
            if (obj[t[i]] < 0){
                return t[i]
            }
        }else{
            return t[i]
        }
    }

    return ""
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna