class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        const n = nums.length;
        let l = 0,
            r = n - 1,
            count = 0;

        while (l <= r) {
            console.log(nums);
            if (nums[l] === val) {
                [nums[l], nums[r]] = [nums[r], nums[l]];
                r--;
            } else {
                count++;
                l++;
            }
        }

        return count;
    }
}
