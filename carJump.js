var canJump = function (nums) {
    let temp = nums.length - 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i + nums[i] >= temp) {
            temp = i
        }
    }
    return temp === 0 ? true : false
};