/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const stack = [];
    const closeToOpen = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    }

    for (let i = 0; i < s.length; i++) {
        // if it is in the closeToOpen HashMap, it is a closing character
        if (closeToOpen[s[i]]) {
            // stack should not be empty, and has to match an opening parenthesis
            if (stack && stack[stack.length - 1] == closeToOpen[s[i]]) {
                stack.pop(); // we can remove this from the stack and continue to the next item
            } else {
                return false;
            }
        } else {
            stack.push(s[i]); // it wasn't in the hashmap, so it is an opening character
        }
    }
    return stack.length === 0 // if stack is empty, we were able to match parenthesis everywhere
};

// Time Complexity: O(n) we have to iterate over a stack of parenthsis
// Space Complexity: O(n) we had to create a stack with n elements