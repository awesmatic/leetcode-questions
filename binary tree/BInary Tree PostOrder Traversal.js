// solution by loop
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    var result = [];
    var stack = [];
    var currentNode = root;
    var prevNode = null;

    while (currentNode !== null || stack.length > 0) {
        while (currentNode !== null) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        }

        currentNode = stack[stack.length - 1];

        if (currentNode.right === null || currentNode.right === prevNode) {
            result.push(currentNode.val);
            stack.pop();
            prevNode = currentNode;
            currentNode = null;
        } else {
            currentNode = currentNode.right;
        }
    }

    return result;
};


//   solution By resursion

function postorderTraversal(root) {
    let result = []
    function traverse(node) {
        if (node === null) return;
        traverse(node.left);
        traverse(node.right);
        result.push(node.val);
    }
    traverse(root)
    return result
}