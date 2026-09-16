/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((a,b) => b - a)
    const uniqueVal = new Set(nums)

    const arr = []

    for (let val of uniqueVal) {
        arr.push(val)
    }

    if (arr.length <= 2) {
        return Math.max(...arr)
    }

    return arr[2]
};