/**
 * @param {number} n
 * @return {boolean}
 */

var sqSumOfDigits = function (n) {
    let sum = 0
    while (n) {
        let rem = n % 10 
        sum += rem * rem
        n = Math.floor(n/10)
    }

    return sum
}

var isHappy = function(n) {
    if(n == 1){
        return true
    }
    // let st = new Set()
    let s = [];
    s.push(n);
    
    while (true){
        if (n == 1)
            return true;

        // Replace n with sum of squares
        // of digits
        n = sqSumOfDigits(n)
        
        
        // If n is already visited, a cycle
        // is formed, means not Happy
        if (s.includes(n))
            return false
    
        // Mark n as visited
        s.push(n)
        
    }
    return false

};