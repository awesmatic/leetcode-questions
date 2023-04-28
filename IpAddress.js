
// to Calculate all the possible ip address from given number

function generateIPAddresses(num) {
    let numString = num.toString();
    let n = numString.length;
    let results = [];

    // Iterate over all possible combinations of 4 parts
    for (let i = 1; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                let first = numString.substring(0, i);
                let second = numString.substring(i, j);
                let third = numString.substring(j, k);
                let fourth = numString.substring(k);

                // check if each part is between 0 and 255
                if (isValidPart(first) && isValidPart(second) && isValidPart(third) && isValidPart(fourth)) {
                    results.push(first + "." + second + "." + third + "." + fourth);
                }
            }
        }
    }

    return results;
}

function isValidPart(part) {
    if (part.length > 3 || parseInt(part) > 255 || parseInt(part) < 0) {
        return false;
    }
    if (part.length > 1 && part[0] === "0") {
        return false;
    }
    return true;
}