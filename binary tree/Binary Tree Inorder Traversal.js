

// using loop
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
    var stack = [];
    var currentNode = root;

    while (currentNode !== null || stack.length > 0) {
        while (currentNode !== null) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        }

        currentNode = stack.pop();
        result.push(currentNode.val);
        currentNode = currentNode.right;
    }

    return result;
};









// using recursion

var inorderTraversal = function (root) {
    let result = [];
    function transverse(node) {
        if (node === null) {
            return;
        }
        transverse(node.left);
        result.push(node.val)
        transverse(node.right);
    }
    transverse(root)
    return result
};