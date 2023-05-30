var successfulPairs = function (spells, potions, success) {
    potions.sort((a, b) => a - b)
    let res = []
    for (let i = 0; i < spells.length; i++) {
        let index = potions.length
        let left = 0;
        right = potions.length
        while (left <= right) {
            let mid = Math.floor((right + left) / 2)
            if (potions[mid] * spells[i] >= success) {
                right = mid - 1
                index = mid
            } else {
                left = mid + 1
            }
        }
        res.push(potions.length - index)
    }
    return res

};