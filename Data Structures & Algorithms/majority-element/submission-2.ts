class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    getFreqMap(nums: number[]): Map<number, number> {
        const freqMap = new Map<number, number>();

        for (let n of nums) {
            freqMap.set(n, (freqMap.get(n) || 0) + 1);
        }

        return freqMap;
    }

    majorityElement(nums: number[]): number {
        const freqMap = this.getFreqMap(nums);
        let maxCount = 0,
            maxVal = Number.POSITIVE_INFINITY;

        for (let [k, v] of freqMap) {
            if (v > maxCount) {
                maxCount = v;
                maxVal = k;
            }
            if (v === maxCount && k < maxVal) {
                maxVal = k;
            }
        }

        return maxVal;
    }
}
