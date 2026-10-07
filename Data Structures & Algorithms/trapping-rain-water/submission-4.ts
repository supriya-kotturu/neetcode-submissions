class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        const n = height.length;
        let l = 0,
            r = n - 1;
        let maxL = height[l],
            maxR = height[r];
        let water = 0;

        while (l <= r) {
            if (maxR < maxL) {
                maxR = Math.max(maxR, height[r]);
                water += Math.max(maxR - height[r], 0);
                r--;
            } else {
                maxL = Math.max(maxL, height[l]);
                water += Math.max(maxL - height[l], 0);
                l++;
            }
        }

        return water;
    }
}
