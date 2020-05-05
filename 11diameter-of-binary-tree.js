/*  
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree
          1
         / \
        2   3
       / \     
      4   5    
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    if (root === null) {
        return 0;
    }

    let lHeight = height(root.left);
    let rHeight = height(root.right);

    let lDiameter = diameterOfBinaryTree(root.left);
    let rDiameter = diameterOfBinaryTree(root.right);

    return Math.max((lHeight + rHeight), Math.max(lDiameter, rDiameter));
};

var height = function (node) {
    if (node === null) {
        return 0;
    }

    return (1 + Math.max(height(node.left), height(node.right)));
}