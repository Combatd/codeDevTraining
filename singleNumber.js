/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

// We can assume all numbers will come in a pair, except for 1.
// We must keep this in O(1) memory usage.
// Instead of saving each unique element, we can simply add them up into a sum
// If every single number had 2 instances of it, than the sum of the unique elements would be the same as the sum of the elements. If there is a difference, it should return the lone number.
// We can do 2 * sum of unique numbers - sum of all numbers. We multiply 2 since all unique numbers come in pairs.
// our example where nums = [4, 1, 2, 1, 2]
// unique numbers = 4 + 1 + 2 = 7
// all numbers = 4 + 1 + 2 + 1 + 2 = 10
// numbers will come in pairs = 2
// 2 * 7 - 10 = 14 - 10 = 4
// But, I can't use any other data structure to hold unique elements if I have O(1) memory.
// However, if we sort the numbers, then all the pairs will be next to each other.
// We can then iterate through and find out if the number and the next element number are the same. If they are not, we return this element. if they are, we go to the next pair iterating 2 spaces.



/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
	if (nums.length == 1) {
		return nums[0]
    }
	nums = mergeSort(nums);
	for (let i = 0; i < nums.length; i += 2){
        if(nums[i] !== nums[i + 1]) {
            return nums[i]
        }
    }
};

function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // We should concatenate any remaining elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}

function mergeSort(array) {
  const half = array.length / 2
    // Base case
  if(array.length < 2){
    return array 
  }
  
  const left = array.splice(0, half)
  return merge(mergeSort(left),mergeSort(array))
}
