var arraySign = function (nums) {
    let product = nums.reduce((acc, curr) => acc *= curr, 1)
    function signFunc(num) {
        if (num > 0) return 1;
        else if (num < 0) return -1;
        else return 0
    }
    return signFunc(product)
};

// another solution 
var arraySign = function (nums) {
    let res = 1;
    for (let num of nums) {
        if (num == 0) {
            return 0
        } if (num < 0) {
            res = -res
        }
    }
    return res
};