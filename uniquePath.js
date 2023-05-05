function uniquePaths(m, n) {
    // create a 2D array to store number of unique paths to each cell
    const dp = Array.from({ length: m }, () => Array(n).fill(0));

    // initialize the first row and column to 1
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }

    // calculate the number of unique paths to each cell
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    // return the number of unique paths to the bottom-right cell
    return dp[m - 1][n - 1];
}
