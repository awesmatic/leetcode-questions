const twoSum2 = (arr, target) => {
    let len = arr.length - 1
    let first = 0;
    let last = len
    while (first < last) {
        let sum = arr[first] + arr[last]
        if (sum < target) {
            first++
        } else if (sum > target) {
            last--
        } else {
            return [first + 1, last + 1]
        }
    }
    return []

}

console.log(twoSum2([1, 2, 3, 5, 7, 8, 10, 13], 12))