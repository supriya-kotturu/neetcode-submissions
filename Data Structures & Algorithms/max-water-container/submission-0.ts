class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        const n = heights.length;
        let l = 0,
            r = n - 1;
        let maxWaterArea = 0;
        let currWaterArea = 0;

        while (l < r) {
            const width = r - l;
            const height = Math.min(heights[l], heights[r]);

            currWaterArea = width * height;
            maxWaterArea = Math.max(currWaterArea, maxWaterArea);

            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return maxWaterArea;
    }
}
