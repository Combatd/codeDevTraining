/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
*/

// The array of numbers is always a sorted in non decreasing order
// Non-decreasing order means the values could stay the same, like [1, 1, 1, 1, 2, 2, 3]
// I cannot create another array, so I must manipulate the nums array giving O(1) Space Complexity
// I would have to find all duplicates somehow in this sorted array
// So I am forced to iterate through the array via a loop that ends when we are getting out of the array
// The array of numbers is always a sorted in non decreasing order
// Non-decreasing order means the values could stay the same, like [1, 1, 1, 1, 2, 2, 3]
// I cannot create another array, so I must manipulate the nums array giving O(1) Space Complexity
// I would have to find all duplicates somehow in this sorted array
// So I am forced to iterate through the array via a loop that ends when we are getting out of the array, as in the next element is a null value
// I can make variables to keep track of what I am doing
// an index will help keep track of the unique number at the current index if it is different


/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
   if(nums[i] !== nums[i - 1]) {
       nums[index] = nums[i]
       index++
}
}
     return index;
};


