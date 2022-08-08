/*
Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.

It is guaranteed that the node to be deleted is not a tail node in the list.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// For deleteNode function, the node is given directly.
// In Singly Linked List, each node has a next attribute for the next node in the Linked List.
// We must remove all references/pointers to this node to have it removed from garbage collection
// we must also ensure that the Linked List does not lose ordering once we remove the Node.



var deleteNode = function(node) {
	tempNode = node.next;
    nextNode = tempNode.next // node.next.next
    node.val = tempNode.val // take the value of the old node.next
	node.next = nextNode // node.next.next old value becomes node.next
};
