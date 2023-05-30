var numEnclaves = function (grid) {
    const row = grid.length;
    const col = grid[0].length;

    const dfs = (i, j) => {
        if (i < 0 || i >= row || j < 0 || j >= col || grid[i][j] !== 1) {
            return;
        }

        grid[i][j] = 0;

        dfs(i - 1, j);
        dfs(i + 1, j);
        dfs(i, j - 1);
        dfs(i, j + 1);
    };

    for (let i = 0; i < row; i++) {
        dfs(i, 0);
        dfs(i, col - 1);
    }

    for (let j = 0; j < col; j++) {
        dfs(0, j);
        dfs(row - 1, j);
    }

    let count = 0;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 1) {
                count++;
            }
        }
    }

    return count;
};