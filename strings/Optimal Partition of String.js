var partitionString = function (s) {
    let hashSet = new Set()
    let res = 1;

    for (str of s) {
        if (hashSet.has(str)) {
            res += 1
            hashSet = new Set()
        }
        hashSet.add(str)
    }
    return res
};