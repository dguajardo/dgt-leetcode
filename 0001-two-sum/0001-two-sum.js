/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function twoSum(nums, target) {
    const numObjects = nums.map((num, index) => ({ num, index }));
    
    numObjects.sort((a, b) => a.num - b.num);

    let left = 0;
    let right = numObjects.length - 1;
    
    while (left < right) {
        const sum = numObjects[left].num + numObjects[right].num;
        
        if (sum === target) {
            return [numObjects[left].index, numObjects[right].index];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return [];  
}