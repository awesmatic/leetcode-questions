const houseRobber = (arr) => {
    const len = arr.length
    if (len === 0) {
        return []
    } else if (len === 1) {
        return arr[0]
    } else if (len === 2) {
        return Math.max(num[0], num[1])
    }

    const dp = [arr[0], Math.max(arr[0], arr[1])]
    for (let i = 2; i < len; i++) {
        dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 1]);
    }

    return Math.max(...dp)

}

console.log(houseRobber([1, 2, 3, 1, 6, 5, 4, 7, 8, 1]))

/* 
in this problem the dynamic programing approch is used to solve it

*/