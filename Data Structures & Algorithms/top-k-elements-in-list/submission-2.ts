class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    getFreqMap(nums: number[]): Map<number, number> {
        const freqMap = new Map<number, number>()
        for(let n of nums){
            freqMap.set(n, (freqMap.get(n) || 0) + 1)
        }
        return freqMap
    }

    topKFrequent(nums: number[], k: number): number[] {
        const freqMap = this.getFreqMap(nums)
        const freqEntries = Array.from(freqMap.entries())
        freqEntries.sort((a, b) => b[1] - a[1])
        
        return freqEntries.slice(0, k).map(ele => ele[0])
    }
}
