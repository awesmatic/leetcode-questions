function combinationSum(candidates, target) {
    let result = [];

    function dfs(start, sum, path) {
        if (sum === target) {
            result.push(path.slice()); // Add a copy of the path to the result
            return;
        }
        if (start >= candidates.length || sum > target) {
            return;
        }
        //   using loop
        //   for (let i = start; i < candidates.length; i++) {
        //     path.push(candidates[i]);
        //     dfs(i, sum + candidates[i], path);
        //     path.pop();
        //   }

        path.push(candidates[start]);
        dfs(start, sum + candidates[start], path);
        path.pop();
        dfs(start + 1, sum, path);
    }

    dfs(0, 0, []);
    return result;
}

console.log(combinationSum(candidates = [2, 3, 5], target = 8))
