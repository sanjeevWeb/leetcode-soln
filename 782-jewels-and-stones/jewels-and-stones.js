/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let sum = 0

    for (let i=0;i<stones.length;i++) {
        if (jewels.includes(stones[i])) {
            sum += 1
        }
    }
    return sum
};