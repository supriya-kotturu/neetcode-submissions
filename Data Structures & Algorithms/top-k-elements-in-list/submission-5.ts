class Solution {
    getFreqMap(nums: number[]): Map<number, number> {
        const freqMap = new Map<number, number>();
        for (let n of nums) freqMap.set(n, (freqMap.get(n) || 0) + 1);
        return freqMap;
    }

    topKFrequent(nums: number[], k: number): number[] {
        const n = nums.length;
        const freqMap = this.getFreqMap(nums);
        const buckets = new Array(n + 1).fill(0).map((_) => new Array());
        const res = [];

        for (let [k, idx] of freqMap.entries()) {
            buckets[idx].push(k);
        }

        for (let i = n; i >= 0; i--) {
            if (buckets[i].length === 0) continue;

            while (buckets[i].length && k > 0) {
                res.push(buckets[i].pop());
                k--;
            }
        }

        return res;
    }
}
