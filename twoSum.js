const twoSum = (arr, sum) => {
    const map = {}
    for (let i = 0; i < arr.length; i++) {
        const diff = sum - arr[i]
        if (diff in map) {
            return [map[diff], i]
        }
        map[arr[i]] = i
    }
    return []
}
// function twoSum(nums, target) {
//   const numMap = {};
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (complement in numMap) {
//       return [numMap[complement], i];
//     }
//     numMap[nums[i]] = i;
//   }

//   return [];
// }
console.log(twoSum([4, 7, 1, 6, 9], 15))
