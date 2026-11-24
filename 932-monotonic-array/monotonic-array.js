/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (arr) {
    let N = arr.length;
    let inc = true;
    let dec = true;

    // Loop to check if array is increasing
    for (let i = 0; i < N - 1; i++) {

        // To check if
        // array is not increasing
        if (arr[i] > arr[i + 1]) {
            inc = false;
        }
    }

    // Loop to check if array is decreasing
    for (let i = 0; i < N - 1; i++) {

        // To check if
        // array is not decreasing
        if (arr[i] < arr[i + 1]) {
            dec = false;
        }
    }

    // Pick one whether inc or dec
    return inc || dec;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna