/*
Given the root of a binary tree, return the level order traversal of its nodes' values. 
(i.e., from left to right, level by level).

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:

Input: root = [1]
Output: [[1]]

Example 3:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// We need to go through every level of the binary tree and go from left to right
// Each level will be a list. The root node would be the first list, and the two children left right will be second list
// the third list will be any sub trees on the third level
// A Breadth First Search would go through these trees and add elements to the lists
// We need to implement BFS first via a queue data structure
// In our queue, we will shift (remove) elements from the front / left side of the queue
// The queue can have elements push (append) on the right / end of the queue
// We keep removing the first element of the queue and adding it to that level's sublist
// To get to the 2nd sublist, we need to add the left and right children of the root to queue and remove them in order from the sublist
// then the second list is complete, we can repeat for the second level's children recursively if they exist
// that would bring us to the 3rd level, where we add them to the queue from the end, shift (rmeove) from the front, then put them in the sublist
// then we are done with an empty queue
// These 3 sublists are going to be merged and submitted into one list returned


 var levelOrder = function(root) {
    let result = []; // may get modified later as
    let queue = []; // array implementation of queue
    queue.push(root);

    while(queue.length > 0) {
        let qLength = queue.length
        let level = [];
        for (let i = 0; i < qLength; i++) {
            let node = queue.shift(); // remove first node from the queue
            if (node) {
                level.push(node.val);
                if (node.left) {
                    queue.push(node.left); // add left child to the queue
                }
                if (node.right) {
                    queue.push(node.right); // add right child to the queue
                }
                
            }
        }
        // don't add an empty level to our result
        if (level.length > 0) {
            result.push(level);
        }
    }
    return result;
};

// Time Complexity; O(n) We will visit n number of nodes once
// Space Complexity: O(n) The largest level of a tree could have up to O(n/2) nodes