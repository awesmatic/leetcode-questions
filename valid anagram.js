const anagram = (a, b) => {
    if (a.length !== b.length) return false
    let first = {}
    let second = {}
    for (let i = 0; i < a.length; i++) {
        first[a[i]] = (first[a[i]] || 0) + 1
        second[b[i]] = ((second[b[i]] || 0)) + 1
        // if(first.hasOwnProperty([a[i]])){
        //     first[a[i]] = first[a[i]] + 1
        // }else {
        //     first[a[i]] =  1
        // }
        // if(second.hasOwnProperty([b[i]])){
        //     second[b[i]] = second[b[i]] + 1
        // }else {
        //     second[b[i]] =  1
        // }

        // second[b[i]] = second[b[i]] + 1
    }


    for (const char in first) {
        if (first[char] !== second[char]) {

            return false;
        }
        // return true
    }
    return true

}

console.log(anagram('anagram', 'graaamn'))

