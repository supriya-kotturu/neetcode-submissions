class Solution {
    trap(height: number[]): number {
        const n = height.length;
        let l = 0,
            r = n - 1;
        let maxL = height[l],
            maxR = height[r];
        let water = 0;

        while (l <= r) {
            if (maxL < maxR) {
                maxL = Math.max(height[l], maxL);
                water += maxL - height[l];
                l++;
            } else {
                maxR = Math.max(height[r], maxR);
                water += maxR - height[r];
                r--;
            }
        }

        return water;
    }
}
