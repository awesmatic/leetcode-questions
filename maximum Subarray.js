const maxSum = (arr) => {
    let max = arr[0]
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (maxSum < 0) maxSum = 0;
        maxSum += arr[i]
        max = Math.max(maxSum, max)
    }
    return max
}

console.log(maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))