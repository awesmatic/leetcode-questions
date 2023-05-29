var addToArrayForm = function (num, k) {
    let sum = [];
    let carry = 0;
    let i = num.length - 1;

    while (i >= 0 || k > 0 || carry > 0) {
        let digit = carry;

        if (i >= 0) {
            digit += num[i];
            i--;
        }

        if (k > 0) {
            digit += k % 10;
            k = Math.floor(k / 10);
        }

        sum.unshift(digit % 10);
        carry = Math.floor(digit / 10);
    }

    return sum;
};

// 2nd solution

var addToArrayForm = function (num, k) {
    num.reverse();
    let i = 0;

    while (k) {
        let digit = k % 10;

        if (i < num.length) {
            num[i] += digit;
        } else {
            num.push(digit);
        }

        let carry = Math.floor(num[i] / 10);
        num[i] = num[i] % 10;

        k = Math.floor(k / 10) + carry;
        i += 1;
    }

    num.reverse();
    return num;
};