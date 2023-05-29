var NumArray = function (nums) {
    this.cumulativeSums = [0]; // Array to store cumulative sums
    let sum = 0;

    // Calculate cumulative sums
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        this.cumulativeSums.push(sum);
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    return this.cumulativeSums[right + 1] - this.cumulativeSums[left];
};
