
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    var result = [];

    function traverse(node) {
        if (node === null) {
            return;
        }
        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
    }

    traverse(root);
    return result;
};


// using loop


// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    var result = [];
    var stack = [];

    if (root !== null) {
        stack.push(root);
    }

    while (stack.length > 0) {
        var node = stack.pop();
        result.push(node.val);

        if (node.right !== null) {
            stack.push(node.right);
        }

        if (node.left !== null) {
            stack.push(node.left);
        }
    }

    return result;
};
