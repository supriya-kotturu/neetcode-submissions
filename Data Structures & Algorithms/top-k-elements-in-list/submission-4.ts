class Solution {
    getFreqMap(nums: number[]): Map<number, number> {
        const freqMap = new Map<number, number>();
        for (let n of nums) freqMap.set(n, (freqMap.get(n) || 0) + 1);
        return freqMap;
    }
    topKFrequent(nums: number[], k: number): number[] {
        const freqMap = this.getFreqMap(nums);
        const n = nums.length;
        const buckets = new Array(n + 1).fill(0).map((m) => new Array());
        const res = [];

        for (let [k, v] of freqMap.entries()) {
            buckets[v].push(k);
        }

        for (let i = n; i >= 0; i--) {
            if (buckets[i] && buckets[i].length === 0) continue;
            const arr = buckets[i];
            while (arr.length && k > 0) {
                res.push(arr.pop());
                k--;
            }
        }

        return res;
    }
}
