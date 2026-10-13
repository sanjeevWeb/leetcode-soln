/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    // nums.sort((a,b) => a - b)
    // let j = 0
    // let n = nums.length
    // let arr = []
    // for (let i=1;i<=n;i++) {
    //     arr.push(i)
    // }
    // let result = []
    // while(j < n){
    //     if (arr[j] != nums[j] && nums.indexOf(arr[j]) == -1){
    //         result.push(arr[j])
    //     }
    //     j++
    // }
    // return result
    let n = nums.length
    let arr = []
    for (let i=1;i<=n;i++) {
        arr.push(i)
    }

    let obj = {}

    for (let i=0;i<n;i++) {
        if(obj[nums[i]]) {
            obj[nums[i]] += 1
        }else{
            obj[nums[i]] = 1
        }
    }
    let result = []
    for (let i=0;i<arr.length;i++) {
        if (!obj[arr[i]]){
            result.push(arr[i])
        }
    }
    return result
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna