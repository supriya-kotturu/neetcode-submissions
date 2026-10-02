class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    getFreqMap(nums: number[]): Map<number, number> {
        const freqMap = new Map<number, number>();
        for (let n of nums) {
            freqMap.set(n, (freqMap.get(n) || 0) + 1);
        }
        return freqMap;
    }
    topKFrequent(nums: number[], k: number): number[] {
        const freqMap = this.getFreqMap(nums);
        const arry = Array.from(freqMap.entries()).sort((a, b) => {
            if (a[1] === b[1]) {
                return a[0] - b[0];
            }
            return b[1] - a[1];
        });

        return arry.slice(0, k).map((a) => a[0]);
    }
}
