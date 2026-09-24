/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(str) {
    let vowels = ['a','e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

    let l = 0
    let r = str.length - 1
    let s = str.split('')

    while (l <= r) {
        if (vowels.includes(s[l]) && vowels.includes(s[r])) {
            let temp = s[l]
            s[l] = s[r]
            s[r] = temp
            l++
            r--
        }else if(!vowels.includes(s[l]) && vowels.includes(s[r])) {
            l++
        }else if(!vowels.includes(s[r]) && vowels.includes(s[l])){
            r--
        }else{
            l++
            r--
        }
    }

    return s.join('')
};