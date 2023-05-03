var rob = function (nums) {
    return Math.max(nums[0], helper(nums.slice(1)), helper(nums.slice(0, -1)))
    function helper(arr) {
        let rob1 = 0;
        let rob2 = 0;
        for (let num of arr) {
            let newRob = Math.max(rob1 + num, rob2)
            rob1 = rob2;
            rob2 = newRob
        }
        console.log(rob2)
        return rob2
    }

};