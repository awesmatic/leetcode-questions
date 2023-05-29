var containsNearbyDuplicate = function (nums, k) {
    const numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (numMap.has(nums[i]) && (i - numMap.get(nums[i])) <= k) {
            return true;
        }
        numMap.set(nums[i], i);
    }
    return false;
};
console.log(containsNearbyDuplicate(nums = [1, 3, 2, 3], k = 1))