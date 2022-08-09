/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
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
 * @return {boolean}
 */
// We need the nodes of the left subtree to be less than root.
// We need the nodes of the right subtree to be more than root
// both left and right must also be binary search trees, so we can't just check the left and rigth attributes of root
// there is likely a way to recursively check left and right going through the trees
// a base case would be "not root" in an inorder traversal
// we check left / lower value node
// we check right / higher value node
// make recursive call, with left as root since that is where to navigate next for inorder traversal
// inorder traversal can be helper method



var isValidBST = function(root) {
	
    function inOrder(root, min, max) {
      if (!root){
          return true
        }
         
        if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
            return false
        }

         return inOrder(root.left, min, root.val) && inOrder(root.right, root.val, max)
     }
 
     return inOrder(root, null, null)
 };
 