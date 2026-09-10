class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        let l = 0,
            idx = 0,
            r = nums.length - 1;

        while (idx <= r) {
            if (nums[idx] === 0) {
                [nums[idx], nums[l]] = [nums[l], nums[idx]];
                l++;
                idx++;
            } else if (nums[idx] === 2) {
                [nums[idx], nums[r]] = [nums[r], nums[idx]];
                r--;
            } else {
                idx++;
            }
        }
    }
}
