/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    const nonZero = nums.filter(num => num !== 0);
    const zeroCount = nums.length - nonZero.length;

    const result = [ ...nonZero, ...Array(zeroCount).fill(0)];
    for( let i = 0 ; i < nums.length; i++){
    nums[i] = result[i];
    }
};