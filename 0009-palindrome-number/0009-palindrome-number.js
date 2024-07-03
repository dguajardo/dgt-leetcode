/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false;
    }
    let original = x;
    let reversed = 0;
    while(x){
      reversed = reversed * 10 + x % 10;
      x = (x / 10) | 0;      
    }

    return original === reversed;
};