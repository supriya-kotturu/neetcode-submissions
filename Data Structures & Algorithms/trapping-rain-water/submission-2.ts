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
        let maxWater = 0,
            currWater;

        while (l <= r) {
            const lHeight = height[l];
            const rHeight = height[r];

            if (maxL < maxR) {
                maxL = Math.max(maxL, height[l]);
                maxWater += Math.max(maxL - height[l], 0);
                l++;
            } else {
                maxR = Math.max(maxR, height[r]);
                maxWater += Math.max(maxR - height[r], 0);
                r--;
            }
        }

        return maxWater;
    }
}
