/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let str = ""

    for (let i=0;i<s.length;i++) {
        if (s[i] == s[i].toUpperCase()) {
            str += s[i].toLowerCase()
        }else{
            str += s[i]
        }
    }
    return str
};