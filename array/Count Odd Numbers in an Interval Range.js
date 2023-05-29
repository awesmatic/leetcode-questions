var countOdds = function (low, high) {
    let length = high - low + 1;
    let count = Math.floor(length / 2)
    if (length % 2 && low % 2) {
        count += 1
    }
    return count
};