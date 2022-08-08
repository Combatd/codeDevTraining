/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */


// So for here, we can initialize a hashmap/dictionary (object in javascript) to keep track of elements in an array
// if the element is not a key in our uniqueElements object, we will add it with a value of 1
// if it already is a key in our uniqueNums object with a value of 1, we will return true
// if we make it through the array without finding more than 1 element instance, we return false.

// Time Complexity: O(1)
// Space Complexity: O(n^2) - possible to have all elements in the array unique, meaning we have to add them all as keays in the dictionary as we are iterating through entire array

var containsDuplicate = function(nums) {
    const uniqueNums = {}
  for (let i = 0; i < nums.length; i++) { // O(n)
if (uniqueNums[nums[i]] == 1) {
  return true; // O(1)
} else {
          uniqueNums[nums[i]] = 1 // add it to our uniqueNums to track O(1)
}
}
return false; // when no duplicates were found O(1)
};
