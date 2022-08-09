/*
Given the root of a binary tree, invert the tree, and return its root.


Example 1:


Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:


Input: root = [2,1,3]
Output: [2,3,1]

Example 3:

Input: root = []
Output: []
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
 * @return {TreeNode}
 */

// To invert a binary tree, we keep the root the same, but the left and right child are swapped
// Invert a binary tree is a recursive definition, so the left subtree will also swap with the right subtree
// The subtrees children were also swapped
// Visit every node, and every time we visit a node, we will need to swap the children
// Recursively, we pass in a root and swap the left and right
// Simplest way to traverse to do this is with depth-first-search
// Our base case is if our root doesn't exist

 var invertTree = function(root) {
    if (!root) {
        return null;
    }

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left); // O(n / 2)
    invertTree(root.right); // O(n / 2)
};

// Time Complexity: O(n) we have to visit n number of nodes
// Space Complexity: O(n) the elements are taking memory in the call stack