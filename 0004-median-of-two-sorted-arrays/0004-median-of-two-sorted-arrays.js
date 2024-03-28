/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const arr = [...nums1, ...nums2];
    const sortedArray = arr.sort((a, b) => a - b);
    const middleLength =  Math.floor(arr.length / 2);
 return sortedArray.length % 2 !== 0 ? sortedArray[middleLength] : (sortedArray[middleLength] + sortedArray[middleLength - 1])/2;
};