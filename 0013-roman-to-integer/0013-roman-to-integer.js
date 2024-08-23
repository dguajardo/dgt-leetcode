/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanInts = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    return s.split("").reduce((acc, curr, i, arr) => {
        const currentVal = romanInts[curr];
        const nextVal = romanInts[arr[i + 1]];
        return nextVal > currentVal ? acc - currentVal : acc + currentVal;
    }, 0);
    
};