class Solution {
    trap(heights: number[]): number {
        let l = 0, r = heights.length - 1;
        let trappedWater = 0;
        let maxL = -1, maxR = -1;

        while(l < r){
            const left = heights[l];
            const right = heights[r];

            if(left < right){
                if(left > maxL) maxL = left
                else trappedWater += maxL - heights[l]
                l++
            }else{
                if(right > maxR) maxR = right
                else trappedWater += maxR - heights[r]
                r--
            }
        }

        return trappedWater;
    }
}
