class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);
        let n = nums.length;
        let l = 0,
            r = n - 1;
        const res: number[][] = [];

        for (let i = 0; i < n; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            ((l = i + 1), (r = n - 1));

            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];

                if (sum === 0) {
                    res.push([nums[i], nums[l], nums[r]]);

                    while (l < r && nums[l] === nums[l + 1]) l++;
                    while (l < r && nums[r] === nums[r - 1]) r--;

                    l++;
                    r--;
                } else if (sum < 0) {
                    l++;
                } else {
                    r--;
                }
            }
        }

        return res;
    }
}
