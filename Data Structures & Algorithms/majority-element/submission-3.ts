class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        let currMajority = nums[0];
        let count = 1;

        for (let i = 1; i < nums.length; i++) {
            if (count === 0) currMajority = nums[i];

            if (nums[i] != currMajority) count--;
            else count++;
        }

        return currMajority;
    }
}
