class Solution {
    firstMissingPositive(nums: number[]): number {
        const freqSet = new Set(nums);

        for (let i = 1; i <= nums.length; i++) {
            if (!freqSet.has(i)) return i;
        }

        return nums.length + 1;
    }
}
