/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// We basically check any number that equals the target
// Then we check any pair of numbers that sum up to the target
// We can use a hashmap (object) to map each numbr to and index - value : index
// When we visit an element, we take the difference with the target add it as a key to our hash map, with the index as the value
// We go through the array nums and eventually each (target - number) difference is a key value pair with index as value
// The hashmap will always have only the difference of the numbers we have visited

 var twoSum = function(nums, target) {
    var twoSum = function (nums, target) {
        let visitedDiff = {};
        for (let i = 0; i < nums.length; i++) {
            let difference = target - nums[i]
            if (difference in visitedDiff) {
                return [visitedDiff[difference], i];
            } else {
                visitedDiff[nums[i]] = i;
            }
        }
    };



// Time Complexity: O(n) We have to visit each element once

// Space Complexity: O(n) we have to initiate a hash map