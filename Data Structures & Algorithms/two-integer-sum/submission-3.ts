class Solution {
    twoSum(nums: number[], target: number): number[] {
        const diffMap = new Map<number, number>();

        for (let idx = 0; idx < nums.length; idx++) {
            const n = nums[idx];
            const diff = target - n; 
            if (diffMap.has(diff)) {
                return [idx, diffMap.get(diff)];
            }
            diffMap.set(n, idx);
        }

        return [-1, -1];
    }
}
