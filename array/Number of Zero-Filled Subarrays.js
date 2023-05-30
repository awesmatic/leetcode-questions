var zeroFilledSubarray = function (nums) {
    let res = 0;
    let noOfZero = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            res = res + 1 + noOfZero
            noOfZero++
        } else {
            noOfZero = 0
        }

    }
    return res
};