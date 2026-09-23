/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let counter = 0
    let temp = 0

    for (let i=0;i<nums.length;i++) {
        if (nums[i] == 1){
            temp += 1
            counter = Math.max(counter, temp)
        }else{
            temp = 0
        }
    }
    return counter
};