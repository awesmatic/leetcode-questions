function setZeroes(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let firstRowHasZero = false;
    let firstColumnHasZero = false;

    // Check if the first row or column contains a zero
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            firstRowHasZero = true;
            break;
        }
    }

    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            firstColumnHasZero = true;
            break;
        }
    }

    // Use the first row and column to mark which rows and columns need to be set to zero
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Set the rows and columns to zero based on the marks in the first row and column
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Set the first row and column to zero if necessary
    if (firstRowHasZero) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }

    if (firstColumnHasZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
}
