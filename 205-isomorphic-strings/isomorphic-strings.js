/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s1, s2) {
    let m1 = {};
    let m2 = {};

    for (let i = 0; i < s1.length; ++i) {

        // If character not seen before, store its
        // first occurrence index
        if (!(s1[i] in m1)) {
            m1[s1[i]] = i;
        }
        if (!(s2[i] in m2)) {
            m2[s2[i]] = i;
        }

        // Check if the first occurrence indices match
        if (m1[s1[i]] !== m2[s2[i]]) {
            return false;
        }
    }

    return true;
};