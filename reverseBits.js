var reverseBits = function (n) {
    // Initialize a variable result to 0.
    let result = 0;
    // Iterate 32 times
    for (let i = 0; i < 32; i++) {
        // Shift the bits in result to the left by 1
        result = result << 1;
        // Bitwise OR result with the least significant bit of num
        result |= n & 1;
        // Shift the bits in num to the right by 1
        n = n >> 1;
    }
    return result >>> 0;

};


