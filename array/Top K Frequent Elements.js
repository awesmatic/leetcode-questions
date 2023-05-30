var topKFrequent = function (nums, k) {
    const counts = {}

    for (n of nums) counts[n] = (counts[n] || 0) + 1

    return Object.keys(counts).sort((a, b) => counts[b] - counts[a]).slice(0, k)
};