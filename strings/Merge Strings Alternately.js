var mergeAlternately = function (word1, word2) {
    let str = ""
    let i = 0;
    while (i < word1.length && i < word2.length) {
        str += word1[i]
        str += word2[i]
        i++
    }

    while (i < word1.length) {
        str += word1[i]
        i++
    }
    while (i < word2.length) {
        str += word2[i]
        i++
    }
    return str
};