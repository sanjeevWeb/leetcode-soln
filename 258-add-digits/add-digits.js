/**
 * @param {number} num
 * @return {number}
 */

var addDigit = function (n) {
    let sum = 0

    while(n){
        let rem = n % 10
        sum += rem
        n = Math.floor(n/10)
    }

    return sum
}

var addDigits = function(num) {
    let summ = addDigit(num)

    while (summ >= 10){
        let curr = addDigit(summ)
        summ = curr
    } 

    return summ
};