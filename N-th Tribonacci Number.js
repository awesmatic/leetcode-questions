var tribonacci = function (n) {
    let arr = [0, 1, 1]
    if (n < 3) return arr[n]
    for (let i = 3; i <= n; i++) {
        [arr[0], arr[1], arr[2]] = [arr[1], arr[2], arr.reduce((acc, curr) => acc + curr)]
    }
    return arr[2]
};

// 2nd method

var tribonacci = function (n) {
    if (n < 1) return 0
    let sum = 0;
    let i = 3
    let first = 0;
    let second = 1;
    let third = 1
    while (i <= n) {
        let temp = first + second + third;
        first = second;
        second = third;
        third = temp
        i++
    }
    return third
};