var wordBreak = function (s, wordDict) {
    let dp = Array(s.length + 1).fill(false)
    dp[s.length] = true

    for (let i = s.length; i >= 0; i--) {
        for (let item of wordDict) {
            if (i + item.length <= s.length && s.substring(i, i + item.length) == item) {
                dp[i] = dp[i + item.length]
            }
            if (dp[i]) {
                break;
            }
        }
    }

    return dp[0]
};