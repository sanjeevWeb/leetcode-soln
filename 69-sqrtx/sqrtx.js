/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x == 0) return 0
    if (x == 1) return 1
    if (x == 2) return 1
    if (x == 3) return 1
    for (let i=1;i<=Math.ceil(x/2);i++) {
        if (i * i == x) {
            return i
        }else if(i * i > x ){
            return i - 1
        }
    }
};