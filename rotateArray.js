/*
Given an array, rotate the array to the right by k steps, where k is non-negative.
*/

// The array of numbers will rotate by the number of times in k
// So, if I have to rotate numbers to the right, and it reaches the end of the array, it continues moving the elements at the beginning.
// Considering how this works, it might be easier to do if we reverse part of the array in place based on the value of k
// so we might start at the beginning index of 0, go through k number of times to the right, and then start from that point backwards 
// we can pop from the end of the array and move it to the front k number of times
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**
var rotate = function(nums, k) {
    for(let i = 0; i < k; i++) {
        nums.unshift(nums.pop()) // too slow
    }
};

var rotate = function(nums, k) {
    for(let i = 0; i < k; i++) {
        nums.unshift(nums.splice(-1)); // too slow alone
    }
};

 */

var rotate = function(nums, k) {
    if(nums.length > k){
            nums.unshift(...nums.splice(-k)) // unshift the elements rather than the array that the splice returns by using ... spread operator
    } else {
        for (let j = 0; j < k; j++) {
            nums.unshift(nums.splice(-1)) // slightly faster than pop()
        }
    }
}