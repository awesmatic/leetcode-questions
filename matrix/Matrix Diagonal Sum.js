var diagonalSum = function (mat) {
    let len = mat.length;
    let res = 0;
    for (let i = 0; i < len; i++) {
        res += mat[i][i];
        res += mat[i][len - 1 - i]
    }

    return res - (len % 2 ? mat[Math.floor(len / 2)][Math.floor(len / 2)] : 0)

};

// more optimise


var diagonalSum = function (mat) {
    let len = mat.length;
    let res = 0;
    let mid = Math.floor(len / 2);

    for (let i = 0; i < len; i++) {
        res += mat[i][i];
        res += mat[i][len - 1 - i];
    }

    return res - (len % 2 ? mat[mid][mid] : 0);
};
