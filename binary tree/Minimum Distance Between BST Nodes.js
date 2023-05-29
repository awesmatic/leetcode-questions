var minDiffInBST = function (root) {
    let prev;
    let res = Infinity;

    function transverse(node) {
        if (node === null) return;
        transverse(node.left);
        if (prev) {
            res = Math.min(res, node.val - prev.val)
        }
        prev = node;
        transverse(node.right)
    }
    transverse(root);

    return res


};