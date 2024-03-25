/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function(nums) {
    // Initialize two pointers for traversing the array
    let left = 0;
    let right = nums.length - 1;
    
    // Initialize an array to store the squared values
    const squares = new Array(nums.length);
    
    // Loop through the array from right to left filling the result array with squared values
    for (let i = nums.length - 1; i >= 0; i--) {
        // Compare the absolute values of the elements at left and right pointers
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            squares[i] = nums[left] * nums[left]; // Square the value at the left pointer
            left++; // Move the left pointer forward
        } else {
            squares[i] = nums[right] * nums[right]; // Square the value at the right pointer
            right--; // Move the right pointer backward
        }
    }
    
    return squares; // Return the sorted array of squared values
};