var findDifference = function (nums1, nums2) {
    let obj1 = new Set(nums1)
    let obj2 = new Set(nums2)
    let arr1 = new Set()
    let arr2 = new Set()


    for (num of nums1) {
        if (!obj2.has(num)) {
            arr1.add(num)
        }
    }
    for (num of nums2) {
        if (!obj1.has(num)) {
            arr2.add(num)
        }
    }
    return [[...arr1], [...arr2]]
};



// optimise method

const findDifference = (a, b) => {
    a = new Set(a)
    b = new Set(b)
    a.forEach(i => b.delete(i) && a.delete(i))
    return [[...a], [...b]]
}