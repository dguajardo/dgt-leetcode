/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    return nums.map((idx) => idx * idx).sort((a, b) => a - b);

};