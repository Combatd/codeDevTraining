/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

// Our reverseList function will only receive the head node of a singly linked list
// We probably need to deal with 2 pointers to iterate through
// currentNode which initializes to the head
// prevNode which initializes to null
// We would set the next node or currentNode.next to prevNode
// We stop once we hit a currentNode when next is null

var reverseList = function(head) {
    let prevNode = null;
    let currentNode = head;

    while (currentNode) {
        let tempNext = currentNode.next // we need to hold this value in a temporary variable
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = tempNext; // our temp variable node is assigned to current node
    }
    return prevNode;
};

// Time Compleexity; O(n) - we have to iterate through the whole singly linked list
// Space Complexity; O(1) - No new space for new data structures was allocated