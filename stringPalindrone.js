// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]

let s = "aab"

function palindromePartitioning(s) {
    let partitions = [];
    let partition = [];
    backtrack(s, 0, partition, partitions);
    return partitions;
}

function backtrack(s, start, partition, partitions) {
    if (start === s.length) {
        partitions.push(partition.slice());
        return;
    }
    for (let i = start; i < s.length; i++) {
        let substring = s.substring(start, i + 1);
        if (isPalindrome(substring)) {
            partition.push(substring);
            backtrack(s, i + 1, partition, partitions);
            console.log(partition, 'before')
            partition.pop();
            console.log(partition, "after")
        }
    }
}

function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}

console.log(palindromePartitioning(s))