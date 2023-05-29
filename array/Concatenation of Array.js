var getConcatenation = function (nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        result[i] = nums[i];
        result[i + nums.length] = nums[i]
    }
    return result
};

// using concat
var nums = [1, 2, 1];
var result = nums.concat(nums);
