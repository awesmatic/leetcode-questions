var minimizeArrayValue = function (nums) {
    let res = nums[0];
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i]
        res = Math.max(res, Math.ceil(total / (i + 1)))
    }
    return res

};