/*
Given two integer arrays nums1 and nums2, 
return an array of their intersection. 
Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
*/

// We have to find an intersection, which are 2 shared elements between the 2 arrays
// since they can be returned in any order like [4, 9] or [9, 4], we just need to find the elements.
// We can get all the unique elements of one of the array and store them in a hash map (javascript object)
// We can search and iterate through the other array that we did not apply keys to the hashmap, and if the current element in an iteration matches a key value pair, we push into an intersection array [].

// So I should create the hash table first, which could have a space of O(n)
// We want to add all unique elements of nums2 to the object uniqueNums.
// For loop nums1 through -1.
// We can return the array with the 2 elements as our answer

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 */ var intersect = function(nums1, nums2) {
    const uniqueElements = {}; // keeps key value pairs of uniqueElements from nums2
  const intersection = []; // should have 2 elements
  for (let i = 0; i < nums2.length; i++) {
      if (!uniqueElements[nums2[i]] == true) {
  uniqueElements[nums2[i]] = true;
}
}

// lets check to see if elements are keys of uniqueElements in nums1
for (let j = 0; j < nums1.length; j++) {
if (nums1.length === intersection.length || nums2.length === intersection.length) {
  return intersection
}	

  if (uniqueElements[nums1[j]] == true && intersection.length <= nums1.length) {
      intersection.push(nums1[j]);
}
}
  return intersection;
};
*/

var intersect = function(nums1, nums2) {
  let i = 0;
  let j = 0;
  // arr1 and arr2 will change depending on which array is larger
  let arr1;
  let arr2;
  if (nums1.length > nums2.length) {
      arr1 = nums1
      arr2 = nums2;
} else {
  arr1 = nums2
  arr2 = nums1
}

  const intersection = [];
while (i < arr1.length && j < arr2.length) {
  if (arr1[i] == arr2[j]) {
      intersection.push(arr1[i]);
      i += 1;
      j += 1;
} else if (arr1[i] < arr2[j]) {
  i++
} else {
  j++
}
}
return intersection;
};
