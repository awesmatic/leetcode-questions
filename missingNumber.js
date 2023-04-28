var missingNumber = function (nums) {
    return -nums.reduce((acc, num, i) => acc + num - i - 1, 0);
};

// 2nd solution
var missingNumber = function (nums) {
    let len = nums.length;//length of array.
    let sum = (len * (len + 1)) / 2; // sum of all nos from 0 to n by series formula
    let sum2 = nums.reduce((a, c) => a + c); //sum of array elements.
    return sum - sum2; //difference is the answer
};