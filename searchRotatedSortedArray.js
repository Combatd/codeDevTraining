/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1

*/

// The array was sorted, but rotated at a random index k
// So we need to find out where it was rotated first
// from there we could use that as a "pivot" where we can split the array into two parts
// from there we could just iteratively perform a binary search (divide and conquer) once we can split into 2 sorted components on the first pass
// We can use binary search at that point since the split up subarrays would be sorted once we split at that pivot
// We can return if we find the target value true or false
// 1. Find the Pivot - if its rotated maybe the left side has the "larger" numbers
// 2. perform a binary search, whichi has left, mid, right pointer

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let midPoint = Math.floor((left + right) / 2);
        if (target === nums[midPoint]) {
            return midPoint;
        }
        // it is less than or equal
        if (nums[left] <= nums[midPoint]) {
            // we should search the right side
            if (target > nums[midPoint] || target < nums[left]) {
                left = midPoint + 1;
            } else {
                right = midPoint - 1;
            }
        } else { // it is greater than the right side
            if (target < nums[midPoint] || target > nums[right]) {
                right = midPoint - 1;
            } else {
                left = midPoint + 1;
            }
        }
    }

    return -1;
};