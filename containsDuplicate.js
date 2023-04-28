var containsDuplicate = function (nums) {
    const mySet = {}

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in mySet) {
            return true
        } else {
            mySet[nums[i]] = true
        }
    }

    return false
};