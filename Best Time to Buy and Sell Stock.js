var maxProfit = function (prices) {
    let l = 0, r = 1;
    let max = 0
    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            let profit = prices[r] - prices[l]
            max = Math.max(max, profit)
        } else {
            l = r
        }
        r += 1
    }
    return max
};