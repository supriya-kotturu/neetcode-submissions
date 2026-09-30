class Solution {
    productExceptSelf(nums: number[]): number[] {
        const n = nums.length;
        const res = Array.from(nums).fill(1);
        let lProduct = 1,
            rProduct = 1;
        let l = 0,
            r = n - 1;

        while (l < n && r >= 0) {
            res[l] *= lProduct;
            res[r] *= rProduct;

            lProduct *= nums[l];
            rProduct *= nums[r];

            l++;
            r--;
        }

        return res;
    }
}
